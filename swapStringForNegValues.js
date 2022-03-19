//Swap string for Array negative values

//given an array of numbers, replace any negative values in the array with
// the string "swap"

let arr = [1, -2, 3, 12, -1] //example array of numbers
function swapStringForNegValues(arr) {  //name our function to swap with a param of arr
    for (var i = 0; i < arr.length; i++) { //for loop to loop through the array
        if (arr[i] < 0) { //if check, if the array index value is less then zero then set index to the new string
            arr[i] = "Swap" // swap to new string
        }
    }
    return arr;
}
console.log(swapStringForNegValues(arr));