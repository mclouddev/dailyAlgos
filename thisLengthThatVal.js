//Given two numbers passed to the function, return a new array of length num1 with each value num2.

//For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

function thisLengthThatValue(num1, num2) {
  var arr = [];
  for (var i = 0; i < num1; i++) {
    arr.push(num2)
  }
  return arr;
}
console.log(thisLengthThatValue(2, 10))
console.log(thisLengthThatValue(5, 1))
console.log(thisLengthThatValue(3, 77))
console.log(thisLengthThatValue(5, 100))