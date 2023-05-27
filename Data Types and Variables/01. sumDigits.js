// Write a function, which will be given a single number. Your task is to find the sum of its digits.

function sumDigits(number) {
    let sum = 0
    let numberToString = number + ""

    for (let i = 0; i < numberToString.length; i++) {
        let curentDigit = Number(numberToString[i])
        sum += curentDigit
    }
    console.log(sum);
}



sumDigits(543)