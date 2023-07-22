// Write a function that receives a string and two numbers. The numbers will be a starting index and count of
// elements to substring. Print the result.

function substring(text, startingIndex, endingIndex) {

    let word = text.substring(startingIndex, endingIndex + startingIndex)
    console.log(word);
}

substring('ASentence', 1, 8)