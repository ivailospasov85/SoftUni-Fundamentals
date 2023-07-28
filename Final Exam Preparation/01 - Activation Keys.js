// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	"Contains>>>{substring}":
// o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// o	Otherwise, prints: "Substring not found!"
// •	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
// o	All given indexes will be valid.
// •	"Slice>>>{startIndex}>>>{endIndex}":
// o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// o	Both indices will be valid.
// Input
// •	The first line of the input will be a string consisting of letters and numbers only. 
// •	After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// •	After the "Generate" command is received, print:
// o	"Your activation key is: {activation key}"


function activationKeys(input) {

    let activationKey = input.shift()
    let element = input.shift()
    while (element !== "Generate") {
        let commands = element.split(">>>")

        switch (commands[0]) {

            case `Contains`:
                if (activationKey.includes(commands[1])) {
                    console.log(`${activationKey} contains ${commands[1]}`);
                } else {
                    console.log(`Substring not found!`);
                }

                break;

            case `Flip`:
                if (commands[1] === `Upper`) {
                    let wordToUpper = activationKey.substring(commands[2], commands[3])
                    let uppedWord = wordToUpper.toUpperCase()
                    activationKey = activationKey.replace(wordToUpper, uppedWord)
                    console.log(activationKey);
                } else if (commands[1] === `Lower`) {
                    let wordToLower = activationKey.substring(commands[2], commands[3])
                    let loweredWords = wordToLower.toLowerCase()
                    activationKey = activationKey.replace(wordToLower, loweredWords)
                    console.log(activationKey);
                }
                break;

            case `Slice`:
                let temoloryArr = Array.from(activationKey)
                let indexToDelete = Number(commands[2]) - Number(commands[1])
                let newArr = temoloryArr.splice(commands[1], indexToDelete)
                activationKey = temoloryArr.join('')
                console.log(activationKey);
                break;
        }
        element = input.shift()
    }
    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])


