let numbers = [1,2,3,4,5];

function sumUp(toAdd) {
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

// ... converts arg list to Array
function sumUp2(...toAdd) {
   let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(numbers));

console.log(sumUp2(10,20,20));