// You will receive two arrays. The first array represents the current stock of the local store. The second array will
// contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product.
// The second array could contain products that are already in the local store. If that happens increase the quantity for
// the given product. You should store them into an object, and print them in the following format: (product ->
// quantity)
// All of the arrays’ values will be strings

function storeProvision(firstArr, secondArr) {

    let resultObj = {}

    for (let i = 0; i < firstArr.length; i += 2) {
        let product = firstArr[i]
        let quantity = Number(firstArr[i + 1])
        resultObj[product] = quantity
    }
    for (let j = 0; j < secondArr.length; j += 2) {
        let newProduct = secondArr[j]
        let newQuantity = Number(secondArr[j + 1])
        if (!resultObj.hasOwnProperty(newProduct)) {

            resultObj[newProduct] = 0;

        }
        resultObj[newProduct] += Number(secondArr[j + 1])
    }

    for (const key in resultObj) {

        console.log(`${key} -> ${resultObj[key]}`);

    }
}






storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)