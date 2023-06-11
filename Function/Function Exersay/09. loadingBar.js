// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the
// input.


function loadingBar(input) {

    let percentsCounter = input / 10
    let dotsCounter = 10 - percentsCounter

    if (percentsCounter === 10) {
        console.log("100% Complete!");
        console.log(`[${"%".repeat(percentsCounter)}${'.'.repeat(dotsCounter)}]`);
    } else {
        console.log(`${input}% [${"%".repeat(percentsCounter)}${'.'.repeat(dotsCounter)}]`)
        console.log(`Still loading...`);
    }

}

loadingBar(100)