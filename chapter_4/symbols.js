let mySymb = Symbol('debug'); // just a debugging string


// symbols are unique ID's and  can transport meta infos;
let obj = {
	name: 'Matt',
	[mySymb]: 22
};

console.log(mySymb);

// symbol with keys can be shared
let symbol1 = Symbol.for('age'); // symbol with key

let person = {
	name: 'Matt',
	age: 30
};

//console.log(symb_1 === symb_2); //true



function makeAge(person) {
	let ageSymbol = Symbol.for('age');
	person[ageSymbol] = 27;
}

makeAge(person);

// logs 27 because Symbol.for('age') value got set inside function
console.log(person[symbol1]);

// logs 30 because Symbol doesn't overwrite property
console.log(person["age"]);
