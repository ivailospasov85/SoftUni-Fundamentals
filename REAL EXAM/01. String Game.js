// Create  a program  that executes changes  over  a string. On  the  first  line,  you  are going  to receive the string. On  the following lines, you will be receiving commands until the "Done" command. There are six possible commands: • "Change {char} {replacement}" o Replace all occurrences of the char with the given replacement, then print the string. • "Includes {substring}" o Check if the string includes the given substring with and print "True" or "False". • "End {substring}" o Check if the string ends with the given substring and print "True" or "False". • "Uppercase" o Make the whole string uppercased, then print it. • "FindIndex {char}" o Find the index of the first occurrence of the given char, then print it. • "Cut {startIndex} {count}" o Remove all characters from the string, except those starting from the given start index and the next count of characters. Print only the cut chars. 


function stringGames(input) {

    let string = input.shift()

    for (let element of input) {

        if (element === "Done") {
            break;
        }

        let orders = [command, ...tokens] = element.split(' ')

        switch (command) {
            case "Change":
                while (string.includes(tokens[0])) {
                    string = string.replace(tokens[0], tokens[1])
                }

                console.log(string);
                break;

        }
        switch (command) {
            case 'Includes':
                if (string.includes(tokens[0])) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

        }
        switch (command) {
            case 'End':
                if (string.endsWith(tokens[0])) {
                    console.log('True');
                } else {
                    console.log('False');
                    break;

                }
        }
        switch (command) {
            case 'Uppercase':
                string = string.toUpperCase()
                console.log(string);

                break;

        }
        switch (command) {
            case 'FindIndex':
                let indexToFind = string.indexOf(tokens[0])
                console.log(indexToFind);
                break;

        }
        switch (command) {
            case 'Cut':
                let endIndex = Number(tokens[0]) + Number(tokens[1])
                let substring = string.substring(tokens[0], endIndex)
                console.log(substring);
                break;

        }

    }
}
stringGames((["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]))