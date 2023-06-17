// Write a function that manipulates an array of numbers.
// • Add {number}: add a number to the end of the array
// • Remove {number}: remove all occurrences of a particular number from the array
// • RemoveAt {index}: removes number at a given index
// • Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every
// other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.


function arrayManipulations(input) {
    let arr = []
    arr = input.shift().split(' ').map(Number)

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i].split(' ')
        let command = currentElement[0]
        let index = Number(currentElement[1])
        let indexToPutNumber = Number(currentElement[2])
        switch (command) {
            case 'Add':
                arr.push(index)
                break;
            case 'Remove':
                if (arr.includes(index)) {
                    indexToPutNumber = arr.indexOf(index)
                    arr.splice(indexToPutNumber, 1)
                }
                break;
            case 'RemoveAt':
                if (arr.indexOf(index)) {
                    arr.splice(index, 1)
                }
                break;
            case 'Insert':
                arr.splice(indexToPutNumber, 0, index)
                break;
        }
    }
    console.log(arr.join(' '));
}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])
