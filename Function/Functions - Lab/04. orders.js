// Write a function that calculates the total price of an order and prints it on the console. The function should receive
// one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single
// piece of each product are:
// • coffee - 1.50
// • water - 1.00
// • coke - 1.40
// • snacks - 2.00
// Print the result formatted to the second decimal place.



function orders(product, quantity) {
    let price = 0;
    let result = 0;



    let caseCoffee = (quantity, price) => quantity * price;
    let caseWater = (quantity, price) => quantity * price;
    let caseCoke = (quantity, price) => quantity * price;
    let caseSnacks = (quantity, price) => quantity * price;
    
    switch (product) {
        case "coffee":
            price = 1.50;
            result = caseCoffee(quantity, price);
            break;
        case "water":
            price = 1.00;
            result = caseWater(quantity, price);
            break;
        case "coke":
            price = 1.40;
            result = caseCoke(quantity, price);
            break;
        case "snacks":
            price = 2.00;
            result = caseSnacks(quantity, price);
            break;
        default:
            console.log("Invalid product");
            return;
    }

    console.log(result.toFixed(2));



}

orders("water", 5)