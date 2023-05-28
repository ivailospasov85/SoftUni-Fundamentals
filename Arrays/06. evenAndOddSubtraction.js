// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an
// array.

function evenAndOddSubtractions(input) {
    let result = ''
    let sumEven = 0
    let sumOdd = 0
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i])
        if (currentNumber % 2 === 0) {
            sumEven += currentNumber
        } else {
            sumOdd += currentNumber
        }
    }
    let totalSum = sumEven - sumOdd
    console.log(totalSum);

}

evenAndOddSubtractions([3,5,7,9])

