// Write a function that receives two characters and prints on a single line all the characters in between them
// according to the ASCII code. Keep in mind that the second character code might be before the first one inside the
// ASCII table.


function characterInRange(firstChar, secondChar) {
    let startChart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt())
    let endChart = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt())

    let chartArr = []

    for (let currentChart = startChart + 1; currentChart < endChart; currentChart++) {
        chartArr.push(String.fromCharCode(currentChart))

    }

    return chartArr.join(' ')

}
console.log(characterInRange('#',
    ':'))