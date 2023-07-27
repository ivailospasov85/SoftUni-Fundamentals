// On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'
// •	"Move {number of letters}":
// o	Moves the first n letters to the back of the string
// •	"Insert {index} {value}":
// o	Inserts the given value before the given index in the string
// •	"ChangeAll {substring} {replacement}":
// o	Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// •	On the first line, you will receive a string with a message.
// •	On the following lines, you will be receiving commands, split by '|' .
// Output
// •	After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"

function theImitationGame(input) {


    let result = input.shift()
    #{item name}#{expiration date}#{calories}#   or 
    for (let line of input) {
        if (line === 'Decode') {
            break;
        }
        let commands = line.split('|')
        if (commands[0] === 'ChangeAll') {
            let wordsToReplace = commands[1]
            let replacement = commands[2]
            while (result.includes(wordsToReplace)) {
                result = result.replace(wordsToReplace, replacement)
            }
        } else if (commands[0] === 'Insert') {
            let index = Number(commands[1])
            let value = commands[2]
            result = result.substring(0, index) + value + result.substring(index)

        } else if (commands[0] === 'Move') {
            let n = Number(commands[1])
            for (let index = 0; index < n; index++) {
                let firstLetter = result.substring(0, 1)
                let anotherLetter = result.substring(1)
                result = anotherLetter + firstLetter
            }
        }
    }
    console.log(`The decrypted message is: ${result}`);


}

theImitationGame(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',

    ]
)
