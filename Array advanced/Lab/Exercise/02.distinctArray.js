// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array.
// Print the result elements separated by a single space.

function districtArray(input) {

    let arr = []
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i])

        if (!arr.includes(currentNumber)) {
            arr.push(currentNumber)
        }
    }
    console.log(arr.join(' '));
}

districtArray([20, 8, 12, 13, 4,
    4, 8, 5])