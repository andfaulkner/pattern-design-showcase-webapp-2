
class Shape {
	constructor(height, width, sides) {
		this.sides = sides;
		this.height = height;
		this.width = width;
	}
	static roll() {
		console.log('Shape is rolling!');
	}
	getAngle() {
		return (this.sides !== 0)
			? 360 / this.sides
			: NaN;
	}
}

export class Circle extends Shape {
	constructor(diameter) {
		// cannot put a statement here
		super(diameter, diameter, 1);
		this.diameter = diameter;
	}
	set radius(value) {
		console.log('can\'t do it! radius is tied to diameter');
	}
	get radius() {
		return this.height / 2;
	}
	set area(value) {
		console.log('can\'t do it! area is tied to diameter.');
		return this.area;
	}
	get area() {
		return Math.PI * (Math.pow(this.height / 2), 2);
	}
	bounce() {
		console.log('circle of diameter ' + this.diameter + ' bounces!');
	}
	whoamiByName() {
		console.log(this.name);
	}
	whoamiConstructor() {
		console.log(this.constructor.name);
		console.log(Object.getPrototypeOf(this));
	}
	whosMyDaddy() {
		console.log(Object.getPrototypeOf(this.constructor).name);
	}
}


// instantiate a class
var circle = new Circle(10);
// use a getter on an instance 
console.log(circle.area); // => 6.283185307179586

// run an instance method that returns a value
console.log(circle.getAngle()); // => 360
// run an instance method that doesn't return a value, but logs something to the console
circle.bounce(); // => circle of diameter 10 bounces!

// use a setter to prevent an instance method from changing a certain value
circle.radius = 2; // => can't do it! radius is tied to diameter
console.log(circle.radius); // => 5     <<< still 5!

// run a static class method
Shape.roll(); // => Shape is rolling!  	<<< static methods can be called right on the class

// run a static class method on the parent of class on which the method is being called
Circle.roll(); // => Shape is rolling!  <<< classes inherit static methods from their parents

// circle.roll(); // => FAILS   				<<< you can't call class methods from instances

// Reflect
circle.whoamiByName();  // =>  undefined  <<< instance can't get its own class with this.name
circle.whoamiConstructor(); // =>  Circle <<< this.constructor.name gives name of instance's class 
circle.whosMyDaddy(); // =>  Shape
		// --> Object.getPrototypeOf(this.constructor).name gives parent 


export class Polygon extends Shape {

	constructor(height, base, sides = 3) {
		super(height, base, sides);
		console.log('new Polygon created!');
		this.base = base;
	}
	balanceOnEdge(edge = 'side') {
		if (edge === 'point') {
			console.log('balancing on point! You cuh-raaaaazay');
		} else if (edge === 'side') {
			console.log('balancing on a side! Way more sensible.')
		}
	}
}

// instantiate a class with a default argument
var triangle = new Polygon(4, 9);
// run a class method with a default value
triangle.balanceOnEdge();
// run a class method with a default value, but don't use the default
triangle.balanceOnEdge('point');