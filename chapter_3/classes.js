class StaticHelper {
	static logTwice(message) {
		console.log(message);
		console.log(message);
	}
}

class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log('Hello, my name is  ' + this.name + ' and I am ' + this.age);
	}
}

class Matt extends Person {
	constructor(age) {
		super('Foo'); // reference to parent class constructor
		this.age = age;
	}

	greet() {
		console.log('Hi there');
	}

	greetTwice() {
		super.greet(); // parent
		this.greet(); // actual class
	}
}

export {Matt, StaticHelper};

/*
let me = new Matt(27);
me.greetTwice();
*/
