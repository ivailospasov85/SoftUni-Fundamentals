// Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by
// the second and print the division formatted to the second decimal point.

function factorialDivision(firstNum, secondNum) {

    function factorial(number) {
        if (number === 0) {
            return 1
        } else {
            return number * factorial(number - 1)
        }
    }

    let firstNumberFactorial = factorial(firstNum)
    let secondNumberFactorial = factorial(secondNum)
    let result = firstNumberFactorial / secondNumberFactorial
    console.log(result.toFixed(2));

}

factorialDivision(10,)