//Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. 
//If the array that was passed to the function has less than two elements, have the function return false.


// For example, greaterThanSecond([1,3,5,7]) should return [5, 7]. Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. 
//Also, greaterThanSecond([2]) should return false.

function greaterThanSecond(arr) {
  if (arr.length < 2) {
    return false;
  }  // if check for test case if the array is less than two elements.

  var arr2 = [];
  for (var i = 0; i < arr.length; i++) { //for loop to go thru array
    if (arr[i] > arr[1]) {    // if statement to check array index and the next value 
      arr2.push(arr[i]); // if value is greater than, we push into new array
    }
  }
  return arr2;
}

console.log(greaterThanSecond([1, 3, 5, 7]))

console.log(greaterThanSecond([0, -3, 2, 5]))

console.log(greaterThanSecond([7]))
