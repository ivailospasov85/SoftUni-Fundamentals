
// The possible commands are:
// o "Add {value}"
// o "Remove {value}"
// o "Replace {value} {replacement}"
// o "Collapse {value}"
// o "Finish"

function numbers(input) {
    let arr = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i].split(' ');
        let command = currentElement[0];
        let number = Number(currentElement[1]);

        switch (command) {
            case "Add":
                arr.push(number);
                break;
            case "Remove":
                let index = arr.indexOf(number);
                if (index !== -1) {
                    arr.splice(index, 1);
                }
                break;
            case "Replace":
                let replacement = Number(currentElement[2]);
                if (arr.includes(number)) {
                    let indexOfNumToReplace = arr.indexOf(number);
                    arr.splice(indexOfNumToReplace, 1, replacement);
                }
                break;
            case "Collapse":
                arr = arr.filter(x => x >= number);
                break;
            case "Finish":
                break;
        }
    }

    console.log(arr.join(' '));
}

numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"]);

