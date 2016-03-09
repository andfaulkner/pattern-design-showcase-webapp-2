var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

import {autobind, deprecate} from 'core-decorators';

function Testable (target) { target.isTestable = true; }

class Dog {
	constructor(name='meeka', age=5) {
		this.name = name;
		this.age = age;
	}
	@Testable
	woof() {
		return `${this.name} says woof!`;
	}
	getmeUndecorated() {
		return this;
	}
	@autobind
	getme() {
		return this;
	}

	@deprecate
	oldWoof() {
		console.log('woofawoofagr');
	}

	@deprecate('extremely old method - removal from API is imminent')
	puppyWoof() {
		console.log('arfarf');
	}

}

var meeka = new Dog();
console.log(meeka.woof());
console.log(meeka.isTestable);
console.log('meeka.getme():');
console.log(meeka.getme());						 // => Dog {name: "meeka", age: 5}   << thanks autobind!
console.log(meeka.getmeUndecorated()); // => undefined

let { getme } = meeka;
let { getmeUndecorated } = meeka;
console.log(getme());
console.log(getmeUndecorated());

meeka.oldWoof();
// => DEPRECATION Dog#oldWoof: This function will be removed in future versions.
// => woofawoofagr
meeka.puppyWoof();
// => DEPRECATION Dog#puppyWoof: extremely old method - removal from API is imminent
// => arfarf

export class FormBox extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'FormBox';
	}
	render() {
		return(
			<div style={{'textDecoration': 'underline', 'fontSize': '20px'}}>
				FormBox!
			</div>
		)
	}
}