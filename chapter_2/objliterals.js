let name = 'Matt';

// dynamic field
let ageField = "age"

let myObj = {
  name,
  [ageField]: 28,
  greet() {
    console.log('Hello ' + this.name );
  },
  "your age"() {
    console.log("Your age is: " + this.age);
  }
};

myObj.greet();
myObj["your age"]();