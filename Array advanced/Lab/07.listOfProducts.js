// You will receive an array of products. Print a numbered array of all the products ordered by name.

function listOfProducts(input) {
    let sorted = input.sort()
    let result = 0
    for (let i = 0; i < sorted.length; i++) {
        result = `${i + 1}.${sorted[i]}`
        console.log(result);
    }


}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions',
    'Apples']
)