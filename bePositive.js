//Given an array, write a function that returns a new array where each negative value was converted to a positive value.

//For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. A positive number in the original array should remain as positive, so that each number in the new array is all positive.


//let arr = [-1, -3, -5]

function bePositive(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) { //if arr index is less than 0 meaning it will be a neg value
      arr[i] = arr[i] * -1; // change the value of arr by multiplying its value by -1 to get positve value
    }
  }
  return arr;
}
console.log(bePositive([-1, -3, -5])) //print and call function, and input your given arr here
console.log(bePositive([-11, -23, -25]))
console.log(bePositive([-19, -53, -45]))
console.log(bePositive([-1, -53, -5]))