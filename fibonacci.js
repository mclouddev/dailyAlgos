
function fibonacci(index) {
  if (index < 2) {
    return index;
  }
  var fib = [0, 1]; // the first two values in the fib sequence we store in array 
  // so if the index is 2, we need to calculate the new fib value and push into array
  // fib(2) would be fib[0]+ fib[1]
  //fib(3) would be fib[1]+ fib[2] etc etc

  for (var i = 2; i <= index; i++) {

    //console.log('index is', index)
    var new_fib = fib[i - 2] + fib[i - 1];
    // create new fib array and calculate with index
    // fib[index-2] gives us fib[0] in the array and fib[index-1] would give us fib[1] in the array


    fib.push(new_fib);
    //console.log('new fib is', new_fib)
    //console.log('fib array', fib)
  }

  //console.log('fib array is now', fib)
  //console.log('final fib index', index, "is", fib[index])
  return fib[index];
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
