//Sieve Implementation
//The sieve works by first assuming that all numbers from

//{2,\dotsc,n\}{2,…,n}
//are prime, and then successively marking them as NOT prime.

//The algorithm works as follows:

//Create a list of all integers from 2 to n.
//Start with the smallest number in the list (2, the smallest prime number).
//Mark all multiples of that number up to n as not prime.
//Move to the next non-marked number and repeat this process until the entire list has been covered.
//When the steps are complete, all remaining non-marked numbers are prime.


const sieveOfEratosthenes = (limit) => {
    const output = new Array(limit + 1).fill(true);
    output[0] = false;
    output[1] = false;

    for (i = 2; i <= limit; i++ )
    if (output[i] === true){
        for (let j = i*2; j <= limit; j=j+i){
            output[j]= false;
        }
    }
    
    //output
    
    let arr = []
    for (let i = 0; i <= output.length; i ++) {
        if (output[i] == true) {
            arr.push(i)
        }
    }
    return arr
}

    console.log(sieveOfEratosthenes(100))