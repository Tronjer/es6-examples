let values = ['foo', 'bar', 'baz', 'ban'];

// a = first val, b = second val, c = rest element (rest of values)
let [a, b, ...c] = values;

console.log(a);
console.log(b);
console.log(c);

let a = 5;
let b = 10;

console.log(a, b);

// swap values
[b, a] = [a, b];
console.log(a, b);

let numbers = [1,2,3];

// ignore 2nd val by whitespace (doesn't work for objects)
let [a, ,c] = numbers;

console.log(a, c);

let [x, y] = [10, 20];
console.log(x, y);
console.log(typeof y);