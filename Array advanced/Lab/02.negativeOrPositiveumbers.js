// Write a function that processes the is in an array one by one and produces a new array. Prepend each
// negative i at the front of the array (as the first i) and append each positive (or 0) i at the end
// of the array.
// The input comes as an array of string is holding numbers.
// The output is printed on the console, each i on a new line.


function negativeOrPositiveNumber(input) {

    let arr = []

    for (num of input) {

        if (num < 0) {
            arr.unshift(num)
        } else {
            arr.push(num)
        }
    }
    console.log(arr.join('\n'));
}

negativeOrPositiveNumber(['3', '-2', '0', '-1'])