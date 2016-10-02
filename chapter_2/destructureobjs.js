let myObj = {
  name: 'Matt',
  age: 25,
  greet: function() {
    console.log('Hello ' + name);
  }
};

// var names have to match obj properties
let {name, age, greet} = myObj;


console.log(name, age);
greet();