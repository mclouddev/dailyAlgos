// given an array can we reverse it?

//example array below
let array = [1,2,3,4,5]

let reverseArray = [] //we will need a temp array value to .push into
for (let i = array.length; i > 0; i--) {  // a simple for loop to go thru array
        reverseArray.push(array[i-1])
    }
console.log(reverseArray);




