// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space

function smallestTwoNumbers(input) {
    let smallest = input.sort((a, b) => a - b).splice(0, 2).join(' ')
    
    console.log(smallest);

}

smallestTwoNumbers([30, 15, 50, 5])