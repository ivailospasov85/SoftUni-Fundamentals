// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
// If the number is NOT a valid day, print: "Invalid day!".


function dayOfTheWeek(input) {
    let day = Number(input);
    switch (day) {
        case 1: console.log("Monday"); break
        case 2: console.log("Tuesday"); break
        case 3: console.log('Wednesday'); break
        case 4: console.log('Thursday'); break
        case 5: console.log('Friday'); break
        case 6: console.log('Saturday'); break
        case 7: console.log('Sunday'); break
        default:console.log("Invalid day!"); break;

    }
}

dayOfTheWeek([3])