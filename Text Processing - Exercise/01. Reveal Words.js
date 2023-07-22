// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function revealWords(words, text) {

    let wordsToReplace = words.split(', ')
    let splittedText = text.split(' ')
    for (let word of wordsToReplace) {
        let searchedWord = '*'.repeat(word.length)

        for (let element of splittedText) {
            if (element === searchedWord) {
                text = text.replace(element, word)
            }
        }
    }
    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'

)
