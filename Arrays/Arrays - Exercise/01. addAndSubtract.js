// Write a function, which changes the value of odd and even numbers in an array of numbers.
// • If the number is even - add to its value its index position
// • If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original
// array, on the third line print the sum of numbers from the modified array.


function addOrSubtract(input) {
    let currentNumber = []
    let sum = 0
    let sumAfter = 0
    let newArrey = []
    for (let i = 0; i < input.length; i++) {
        currentNumber = input[i]
        sum += currentNumber
        if (currentNumber % 2 === 0) {
            currentNumber += i
        } else {
            currentNumber -= i
        }
        input[i] = currentNumber
        sumAfter += currentNumber


    }
    console.log(input);
    console.log(sum);
    console.log(sumAfter);
}

addOrSubtract([5, 15, 23, 56, 35])
