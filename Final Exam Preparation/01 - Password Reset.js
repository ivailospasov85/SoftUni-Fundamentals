// Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// o	If it doesn't, prints "Nothing to replace!".
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.


function passwordReset(input) {
    let password = input.shift();

    for (let command of input) {
        if (command === "Done") {
            break;
        }

        let [operation, ...params] = command.split(' ');

        switch (operation) {
            case "TakeOdd":
                password = password.split('').filter((_, index) => index % 2 !== 0).join('');
                console.log(password);
                break;
            case "Cut":
                let [index, length] = params.map(Number);
                let substring = password.substring(index, index + length);
                password = password.replace(substring, '');
                console.log(password);
                break;
            case "Substitute":
                let [substringToReplace, substitute] = params;
                if (password.includes(substringToReplace)) {
                    while (password.includes(substringToReplace)) {
                        password = password.replace(substringToReplace, substitute);
                    }
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }
    }

    console.log(`Your password is: ${password}`);
}


passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)