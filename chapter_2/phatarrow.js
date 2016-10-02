let foo = 'Hello';
let bar = 'World';
let baz = 'Hi there';

function fn(foo) {
  console.log(foo);
}

let fn2 = (bar) => {
  console.log(bar);
}

function fn3(baz) {
  return baz;
}

let fn4 = (baz) => baz;

// no () neccessary if only one arg
let fn5 = baz => baz;

fn(foo);
fn2(bar);

console.log(fn3(baz));
console.log(fn4(baz));
console.log(fn5(baz));

var button = document.querySelector('button');

function fn6() {
  console.log(this);
}

var fn7 = () => console.log(this);

// Scope Button Obj
button.addEventListener('click', fn7);

// Scope Window Obj
// () => doesn't change context
button.addEventListener('click', fn7);
