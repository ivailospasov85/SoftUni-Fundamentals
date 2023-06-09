// Write a function that stores information about a person’s name and his address. The input comes as an array of
// strings. Each string contains the name and the address separated by a colon. If you receive the same name twice
// just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.

function addressBook(input) {
    let address = []

    for (const element of input) {
        let [name, addressOfPeople] = element.split(':')
        address[name] = addressOfPeople

    }
    let entries = Object.keys(address)
    entries.sort()
    for (const key of entries) {
        console.log(`${key} -> ${address[key]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])