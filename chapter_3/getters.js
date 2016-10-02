class Person {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name.toUpperCase();
	}

	set name(value) {
		if (value.length > 3) {
			this._name = value;
		} else {
			console.log('Rejected')
		}
	}

}

let person = new Person('Matt');
person.name = 'Ma';
console.log(person);


export {Person};
