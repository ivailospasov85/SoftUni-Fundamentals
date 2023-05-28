// Write a function that receives an array of numbers and prints the sum of the first and last element in that array

function sumFirstAndLastElements(input) {

    let firstElement = input[0]
    let lastElement = input[input.length - 1]

    let result = firstElement + lastElement
    console.log(result);

}

sumFirstAndLastElements([20, 30, 40])