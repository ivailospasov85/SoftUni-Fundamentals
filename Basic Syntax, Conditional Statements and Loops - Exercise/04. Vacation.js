// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on
// that information calculate how much they have to pay and print that price on the console. Use the table below. In
// each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second
// decimal point.

function vacation(group, type, day) {
    let price = 0
    let totalPrice = 0

    if (type === 'Students') {
        switch (day) {
            case 'Friday':
                price = 8.45
                break;
            case 'Saturday':
                price = 9.80
                break;
            case 'Sunday':
                price = 10.46
                break;
        }
    } else if (type === 'Business') {
        switch (day) {
            case 'Friday':
                price = 10.90
                break;
            case 'Saturday':
                price = 15.60
                break;
            case 'Sunday':
                price = 16
                break;
        }
    } else if (type === 'Regular') {
        switch (day) {
            case 'Friday':
                price = 15
                break;
            case 'Saturday':
                price = 20
                break;
            case 'Sunday':
                price = 22.50
                break;
        }

    } if (type === 'Students' && group >= 30) {
        price *= 0.85
    } else if (type === 'Business' && group >= 100) {
        group -= 10
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        totalPrice *= 0.95
    }
    totalPrice = group * price
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
)