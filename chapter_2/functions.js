// default param
function isEqual(number, compare = 10) {
  return number == compare;
}

console.log(isEqual(10));