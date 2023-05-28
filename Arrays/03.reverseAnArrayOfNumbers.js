// Write a program, which receives a number n and an array of elements. Your task is to create a new array with n
// numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reverseAnArray(number, array) {

    let buff = []
    for (let index = 0; index < number; index++) {
        let currentNumber = array[index]
        buff.push(currentNumber)
    }
    let reversStr = []
    for (let i = buff.length - 1; i >= 0; i--) {
        reversStr.push(buff[i])


    }

    console.log(reversStr.join(' '));


}

reverseAnArray(3, [10, 20, 30, 40, 50])