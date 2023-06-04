// Write a function that finds the longest sequence of equal elements in an array of numbers.
// If several longest sequences exist, print the leftmost one.

function maxSequence(array) {

    let sequence = 1
    let maxSequence = 0
    let maxSequenceNum = 0
    for (let index = 0; index < array.length; index++) {

        if (index !== 0) {
            let currentNumber = Number(array[index])
            let perviousNumber = Number(array[index - 1])
        
        if (currentNumber === perviousNumber) {
            sequence++
            if (sequence > maxSequence) {
                maxSequence = sequence
                maxSequenceNum = currentNumber
            }
        } else {
            sequence = 1
        }
}
    }
    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])