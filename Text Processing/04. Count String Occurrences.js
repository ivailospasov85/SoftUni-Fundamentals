// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences
// of this word in the text.

function counting(text, word) {

    let counter = 0
    let splittedText = text.split(' ')

    for (const element of splittedText) {
        if (element === word) {
            counter++
        }
    }
    console.log(counter);
}

counting('This is a word and it also is a sentence',
    'is')