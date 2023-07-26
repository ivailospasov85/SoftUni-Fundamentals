// Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until
// you receive the line "Purchase". For the line to be valid it should be in the following format:
// ">>{furniture name}<<{price}!{quantity}"
// The price can be a floating-point number or a whole number. Furniture items must start with a capital letter. Store
// the names of the furniture and the total price. At the end print each bought furniture on a separate line in the
// format:
// "Bought furniture:
// {1st name}
// {2nd name}
// …"
// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second
// decimal point.
// If there are not valid furniture print only:
// Bought furniture:
// Total money spend: {spend money}



function furniture(arr) {

    let regex = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/
    let total = 0

    console.log("Bought furniture:");

    for (let el of arr) {

        let match = el.match(regex);
        if (match) {

            let items = match.groups.name
            let price = +match.groups.price
            let count = +match.groups.quantity
            total += price * count

            console.log(items);
        }
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
])