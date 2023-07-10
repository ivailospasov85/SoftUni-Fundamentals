// Write a function that takes a certain number of items and their quantity. If the same item appears more than once,
// add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The
// input comes as an array of strings. Try using a Map

function storage(input) {

    let result = {}

    for (const element of input) {
        let product = element.split(' ')[0]
        let quality = Number(element.split(' ')[1])
        if (result.hasOwnProperty(product)) {
            result[product] += Number(quality)
        } else {
            result[product] = Number(quality)
        }
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])