//Given an array of integers, where all elements but one occur twice, find the unique element.
// Example a=[1,2,3,4,3,2,1]
// the unique element is 4

// lonelyinteger has the following parameter(s):
// int a[n]: an array of integers
// return int: the unique element that only occurs once.


//psuedo code
// we can first sort the array using sort() method
// the array is always integers for this problem
// create a for loop to compare the value to the next one in the array and then the previous value
// if the values are different we will be left with the only unique element in the array


let a = [1, 2, 3, 4, 3, 2, 1];
function lonelyInteger(a) {
  a.sort(); // sort the array first so we can easily compare the values that are on in front and one in back of the index
  // array after sort() = [1,1,2,2,3,3,4]

  for (var i = 0; i < a.length; i++) {  // create a for loop to travel thru the given array
    if (a[i] !== a[i + 1] && a[i] !== a[i - 1]) { // if check that compares the value of index and the one ahead of it
      // second && to also check the one behind it
      // both conditions must be met in order to return a value of i
      return a[i];
    }
  }
}

lonelyInteger(a);

