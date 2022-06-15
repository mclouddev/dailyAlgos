// add odd integers from -25k to 30k
//have the function return its final sum

var sum = 0;
function addOddInts() {
  for (var i = -24999; i < 30000; i += 2) {
    sum += i;
  }
  console.log(sum);
  return sum;
}
addOddInts()

//print given array 
// with array values being 1,3,5 print each value
// use a for loop to, start will be 0, travel thru the entire array using .length and incrememnt by 1
// and console log the array of i 

let arr = [1, 3, 5];
function printArray() {
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i])
  return arr[i];
}
printArray()

// print positive integer only in the given array 
// loop thru array using a for loop
// run if check to see if the value of array i is greater than 0 and print if greater than 0
let array = [-1, 3, -5, 10, 13]
function printPositives() {
  for (var i = 0; i < array.length; i++)
    if (array[i] > 0) {
      console.log(array[i])
    }
}
printPositives()

//print positive index in Array

let array2 = [1, 2, -10] // output should print index of 0 & 1
function printPositiveIndex() {
  for (var i = 0; i < array2.length; i++) {
    if (array2[i] > 0) {
      console.log(i)
    }
  }
}
printPositiveIndex()