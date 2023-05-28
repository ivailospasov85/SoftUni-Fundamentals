// / Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array.
// // Print the resulting elements on a single line, space-separated. 

function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let firstNumber = arr[i];
        let lastNumber = arr[arr.length - 1 - i];
        arr[i] = lastNumber;
        arr[arr.length - 1 - i] = firstNumber;

    }
    console.log(arr.join(' '))


}

reverseInPlace(['a', 'b', 'c', 'd', 'e']) 