// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.


function sumEvenNumbers(numAsText) {

    let sum = 0
    for (let text of numAsText) {
        let num = Number(text)
        sum += num % 2 === 0 ? num : 0
    }

    console.log(sum);

}

sumEvenNumbers(['3', '5', '7', '9'])

