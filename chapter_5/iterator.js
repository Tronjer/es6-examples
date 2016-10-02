let array = [1, 2, 3];

console.log(typeof array);

//build-in iterator
console.log(typeof array[Symbol.iterator]);

let it = array[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // exhausted (done === true)

let person = {
	name: 'Matt',
	hobbies: ['Sports', 'Cooking'],
	[Symbol.iterator]: function () {
		let i = 0;
		let hobbies = this.hobbies;
		return {
			next: function () {
				let value = hobbies[i];
				i++;
				return {
					done: i >= hobbies.length ? true : false,
					value: value
				}
			}
		}
	}
};

for (let hobbie of person) {
	console.log(hobbie);
}