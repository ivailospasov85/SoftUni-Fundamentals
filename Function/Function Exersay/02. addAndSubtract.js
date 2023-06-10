// You will receive three integer numbers.
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts
// the result of the function the sum() and the third integer.

function addAndSubtracts(firstNum, secondNum, thirdNum) {


    function sum(firstNum, secondNum) {
        return firstNum + secondNum
    }

    let sumNumbers = sum(firstNum, secondNum)
    function subtract(sum, thirdNum) {

        return sum - thirdNum

    }
    return subtract(sumNumbers, thirdNum)

}

addAndSubtracts(23,
    6,
    10)