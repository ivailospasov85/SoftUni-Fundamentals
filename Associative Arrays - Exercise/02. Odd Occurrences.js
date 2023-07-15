// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space

function oddOccurrences(input) {
    let result = {}
    let words = input.toLowerCase().split(' ')

    for (let word of words) {
        result[word] = 0
        for (let searched of words) {
            if (word === searched) {
                result[word]++

            }
        }
    }
    let sorted = Object.entries(result).filter((word) => word[1] % 2 !== 0).sort((a, b) => b[1] - a[1])
    for (let key of sorted) {
        console.log(key).join(' ');
    }
}




oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
