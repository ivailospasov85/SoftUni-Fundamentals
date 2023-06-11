// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its
// positive divisors excluding the number itself (also known as its aliquot sum).

function perfectNumber(input) {

    let sum = 0

    for (let i = 0; i <= input / 2; i++) {

        if (input % i === 0) {
            sum += i
        }
    }

    if (sum === input && input !== 1) {
        console.log(`We have a perfect number!`);
    } else {
        console.log("It's not so perfect.");
    }


}

console.log(perfectNumber(28))