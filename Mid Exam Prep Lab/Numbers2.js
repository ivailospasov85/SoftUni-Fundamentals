// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].


function numbers(input) {

    let arr = input.split(' ')
    let sum = 0
    let length = arr.length

    for (let i = 0; i < length; i++) {
        sum += Number(arr[i])
    }
    let average = sum / length
    let averageArr = arr.filter(x => x > average).sort((a, b,) => b - a)
    if (averageArr.length === 0) {
        console.log('No');
    } else {
        let result = averageArr.slice(0, Math.min(5, averageArr.length)).join(' ');
        console.log(result);
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')