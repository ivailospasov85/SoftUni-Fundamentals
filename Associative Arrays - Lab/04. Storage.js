// Write a function that takes a certain number of items and their quantity. If the same item appears more than once,
// add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The
// input comes as an array of strings. Try using a Map

function storage(input) {

    let result = []

    for (const element of input) {
        let [product, quality] = element.split(' ')
        if (result.hasOwnProperty(product)) {
            result[product] += Number(result[quality])
        }
        result[product] = quality

    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])