// You are given an array of numbers. Write a function that prints the elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function oddNumbers(input) {

    let arr = input.filter((el, i) => i % 2 !== 0)
    let doubled = arr.map(x => x * 2)
    doubled.reverse()

    console.log(doubled.join(' '));
}

oddNumbers([10, 15, 20, 25])