// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.


function sumEvenNumbers(input) {

    let result = ''
    let sum = 0
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i])
        if (currentNumber % 2 === 0) {
            sum += currentNumber
        }
    }

    console.log(sum);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])