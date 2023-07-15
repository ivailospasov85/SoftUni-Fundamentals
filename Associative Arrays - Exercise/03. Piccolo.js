// Write a function that:
// • Records a car number for every car that enters the parking lot
// • Removes a car number when the car goes out
// • Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

function piccolo(input) {
    let set = new Set

    for (const element of input) {
        let [direction, carNumber] = element.split(', ')

        if (direction === 'IN') {
            set.add(carNumber)
        } else {
            set.delete(carNumber)
        }
    }
    let sorted=Array.from(set.keys).sort()
    if (set.size > 0) {
        set.forEach(element => {
            console.log(element);
        });
    } else {
        console.log("Parking Lot is Empty");
    }



}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])