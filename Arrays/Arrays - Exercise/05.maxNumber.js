// Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the
// elements to its right.
// Output
// Print all top integers on the console, separated by a single space

function maxNumber(input) {
    let result = ''
    let currentNumber = 0
    let isMax = true

    for (let i = 0; i < input.length; i++) {

        currentNumber = Number(input[i])
        isMax = true
        for (let j = i + 1; j < input.length; j++) {
            let nextNumber = Number(input[j])


            if (nextNumber >= currentNumber) {
                isMax = false
                break;
            }
        }
        if (isMax) {
            result += currentNumber + ' '
        }
    }



    console.log(result);
}


maxNumber([1, 4, 3, 2])