// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// •	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]
// Output
// •	If the food, the hay, and the cover are enough, print:
// o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// •	If one of the things is not enough, print:
// o	"Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!

function guineaPig(input) {
    let foodAvailable = input[0] * 1000;
    let hayAvailable = input[1] * 1000;
    let coverAvailable = input[2] * 1000;
    let pigWeightInKg = input[3] * 1000;

    let eatingPerDay = 300;
    let hayPercentage = 0.05;

    let daysInMonth = 30;

    // let foodNeeded = eatingPerDay * daysInMonth;
    // let hayNeeded = (foodAvailable - foodNeeded) * hayPercentage;
    let coverNeeded = (pigWeightInKg / 3) * 10;
    coverAvailable -= coverNeeded

    for (let i = 1; i <= daysInMonth; i++) {
        foodAvailable -= eatingPerDay
        if (i % 2 === 0) {
            let hayNeeded = foodAvailable * hayPercentage
            hayAvailable -= hayNeeded
        }
    }

    if (foodAvailable <= 0 || hayAvailable <= 0 || coverAvailable <= 0) {
        console.log('Merry must go to the pet store!');
    } else {
        let excessFood = foodAvailable / 1000; // Convert back to kilograms
        let excessHay = hayAvailable / 1000; // Convert back to kilograms
        let excessCover = coverAvailable / 1000; // Convert back to kilograms

        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`);
    }

}


guineaPig(["10",
    "5",
    "5.2",
    "1"])




