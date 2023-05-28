// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array.
// Print the resulting elements on a single line, space-separated. 

function reverseInPlace(input) {
    let result = ''
    for (let i = input.length - 1; i >= 0; i--)
        result+=input[i]+ ' '

        console.log(result);


}

reverseInPlace(['a', 'b', 'c', 'd', 'e']) 