//Given array, swap first and last, second and second-to-last, third and third-to- last, etc. Have the function return this swapped array.

//ThisFor example swapTowardCenter([true,42,"Ada",2,"pizza"]) should return ["pizza",2,"Ada",42,true]. Passing [1,2,3,4,5,6] should return [6,5,4,3,2,1].


let arr = [1, 2, 3, 4, 5, 6]
function swapTowardCenter(arr) {
  for (let i = 0; i < arr.length / 2; i++) {

    var temp = arr[i]; // create var to hold first value in the array
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    //console.log(arr)
  }
  return arr;
}
console.log(swapTowardCenter(arr))