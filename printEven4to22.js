
//print even numbers from 4 to 22
//create a function that prints all even ints starting from 4 all the way up to 22
//

function printEven4to22() {
    let sum = 0;
    for (let i = 4; i <= 22; i += 2) {
        sum += i;
        console.log(i);
    }
    return sum;
}
console.log(printEven4to22())

