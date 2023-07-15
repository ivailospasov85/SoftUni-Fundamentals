// Write a function that receives an array of words and finds occurrences of given words in that sentence.
// The input will come as an array of strings. The first string will contain the words you will be looking for separated by
// a space. All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.

function wordTracker(input) {

    let result = {}

    let wordsToFind = input.shift().split(' ')
    for (let word of wordsToFind) {
        result[word] = 0; // Initialize each word's count to 0
    }

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    let sorted = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`)
    }
    
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']

)