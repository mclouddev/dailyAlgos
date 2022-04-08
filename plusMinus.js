//HACKER RANK plusMinus 

//Given an array of integers, calculate the ratios of its elements that are positive, 
//negative, and zero. Print the decimal 
//value of each fraction on a new line with  places after the decimal. 

var arr = [-4, 3, -9, 0, 4, 1]; //example array

function plusMinus(arr) { //function called plusMinus with one parameter of (arr)
  var n = arr.length;  //establish var for the array length
  var positive = 0; //create a var to hold positive value count which will start at zero
  var negative = 0; //create a var to hold negative value count which will start at zero
  var zero = 0; //create a var to hold zero value count which will start at zero

  for (var i = 0; i < n; i++) { //loop thru the array length to check array index values
    if (arr[i] > 0) { //if array index value is a positive value
      positive += 1; //we then increment the count of the positive var
    } else if (arr[i] < 0) { //if the array index value is negative 
      negative += 1; //we then increment the negative count
    } else { // and any other value is zero
      zero += 1; //so we increase the zero count
    }
  }
  // the second step
  //in order to print the decimal values we create new variables and take the count over the length 
  // of the array which will give us a fraction
  var pos = positive / n;
  var neg = negative / n;
  var zer = zero / n;
  // to print as decimal we can use toFixed built in function and input 6 to give us 6 decimal points
  // we can use "\n" as a line break
  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

plusMinus(arr);