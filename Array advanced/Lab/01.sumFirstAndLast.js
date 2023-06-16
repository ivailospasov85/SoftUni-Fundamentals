// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.

function sumFirstAndLast(input) {
    let arr = []
    arr = input.map(Number)
    let first = arr.shift()
    let last = arr.pop()
    let result = first + last
    console.log(result);

}

sumFirstAndLast(['20', '30', '40'])