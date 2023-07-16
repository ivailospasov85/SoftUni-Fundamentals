// you are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on),
// and every even – quantity. Your task is to collect the resources and print them each on a new line.
// Print the resources and their quantities in the format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000].

function minerTask(input) {

    let result = {}
    for (let element = 0; element < input.length; element += 2) {
        let resource = input[element]
        let quantity = Number(input[element + 1])
        if (result.hasOwnProperty(resource)) {
            result[resource] += quantity
        } else {
            result[resource] = quantity
        }
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])