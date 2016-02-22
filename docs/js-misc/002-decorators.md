Class properties
================

Getting class properties
------------------------

		class Dog {
			woof(name='meeka') {
				return `${name} says woof!`;
			}
		}

		Object.getOwnPropertyDescriptor(Dog.prototype, 'woof')
		// => {writable: true, enumerable: false, configurable: true}


Setting class properties
------------------------

		Object.defineProperty(Dog.prototype, 'gr', {
			value: function gr(name) {
      	return name + ' says gr!';
      },
			enumerable: false,
			configurable: true,
			writable: true
		});

*  Dog.prototype now has these properties:

    {value: function gr ..., writable: true, enumerable: false, configurable: true}


Decorators
==========

*   helpful for anything you want to transparently wrap with extra functionality


Simple decorator on a function
-------------------------------

		function Testable (target) { target.isTestable = true }

		@Testable
		class ATestableClass {
		}

		// now we can check if the class is testable
		ATestableClass.isTestable // true

*   helpful for anything you want to transparently wrap with extra functionality

core-decorators (module)
========================

@autobind
---------
*   Forces invocations of this function to always have this refer to the class instance
*   can also be defined on whole classes - which acts like @autobind was added to every method

### example
		import { autobind } from 'core-decorators';

		class Person {
		  getPersonNoAutobind() {
		    return this;
		  }

		  @autobind
		  getPerson() {
		    return this;
		  }
		}

		let person = new Person();
		let { getPersonNoAutobind } = person;
		let { getPerson } = person;

		getPerson();						// => Person {}
		getPersonNoAutobind(); 	// => undefined

### example - whole class

		@autobind
		class Person {	
			//class definition here
		}


@decorate
---------
*   Immediately apply provided fn & args to method, letting you wrap methods w/
    arbitrary helpers e.g. those provided by lodash (such as memoize)

### Example

		import { decorate } from 'core-decorators';
		import { memoize } from 'lodash';
		var count = 0;

		class Task {
		  @decorate(memoize)
		  doSomethingExpensive(data) {
		    count++;
		    // something expensive done in here;
		    return data;
		  }
		}

		var task = new Task();
		var data = [1, 2, 3];
		task.doSomethingExpensive(data);
		task.doSomethingExpensive(data);
 
		count === 1; // => true     <<< because doSomethingExpensive only ran once; result was cached

@readonly
---------

*   Marks a property or method as not being writable

### example
		import { readonly } from 'core-decorators';

		class Meal {
		  @readonly
		  entree = 'steak';
		}

		var dinner = new Meal();
		dinner.entree = 'salmon'; // => Cannot assign to read only property 'entree' of [object Object]

@suppressWarnings
-----------------

*   block console.warm calls from within the method. This includes @deprecate calls.

@deprecate
----------
*   Calls console.warn() with a deprecation message. Can be used with custom or default.

### examples

		class Dog {
			@deprecate
			oldWoof() {
				console.log('woofawoofagr');
			}

			@deprecate('extremely old method - removal from API is imminent.')
			puppyWoof() {
				console.log('arfarf');
			}
		}

		var meeka = new Dog();
		meeka.oldWoof();
		// => DEPRECATION Dog#oldWoof: This function will be removed in future versions.
		// => woofawoofagr
		meeka.puppyWoof();
		// => DEPRECATION Dog#puppyWoof: extremely old method - removal from API is imminent.
		// => arfarf


@mixin

@time

@lazyInitialize