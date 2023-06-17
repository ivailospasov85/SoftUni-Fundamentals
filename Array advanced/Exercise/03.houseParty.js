// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// - "{name} is going!"
// - "{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list
// print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name}
// is not in the list!").
// At the end print all the guests each on a separate line


function houseParty(input) {

    let gestList = []

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i].split(' ')
        let name = currentElement[0]
        let length = currentElement.length
        if (!gestList.includes(name)) {
            if (length === 3) {
                gestList.push(name)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else if (gestList.includes(name)) {
            if (length === 3) {
                console.log(`${name} is already in the list!`);
            } else {
                let index = gestList.indexOf(name)
                gestList.splice(index, 1)
            }
        }

    }
    console.log(gestList.join('\n'));

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)