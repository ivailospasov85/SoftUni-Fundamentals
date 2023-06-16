// Write a function that calculates and print the value of a number raised to a given power:

function mathPower(firstNum, secondNum) {
    let result = 1
    for (let i = 0; i < secondNum; i++) {
        result *= firstNum
    }
    console.log(result);
}

mathPower(2, 8)