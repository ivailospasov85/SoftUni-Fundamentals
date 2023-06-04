// Write a function that receives an array and the number of rotations you have to perform.
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.

function arrayRotation(array, rotation) {

    for (let i = 0; i < rotation; i++) {

        let firstElement = array.shift()
        array.push(firstElement)
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)
