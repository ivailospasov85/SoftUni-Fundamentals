// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending
// order. The input comes as an array of strings.

function wordOccurrences(input) {

    let result = {}

    for (let element = 0; element < input.length; element++) {
        let word = input[element]
        let counter = 0
        for (let locking of input) {
            if (locking === word) {
                counter++
                result[word] = counter
            }

        }

    }
    let sorted = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)

    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }

};



wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]
)