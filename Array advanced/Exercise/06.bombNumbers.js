// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain
// power.
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors
// from left and right. Detonations are performed from left to right and all detonated numbers disappear.
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the
// special bomb number and its power.
// The output is the sum of the remaining elements in the sequence.

function bombNumbers(sequence, bombPreparation) {
    let minified = sequence
    let sum = 0
    let bomb = bombPreparation[0]
    let victims = bombPreparation[1]
    let afterBombingFiled = []


    while (minified.includes(bomb)) {
        let indexOfBomb = minified.indexOf(bomb)
        afterBombingFiled = minified.splice(indexOfBomb, (victims, victims + 1))
        afterBombingFiled = minified.splice(indexOfBomb - victims, victims)

    }

    for (let i = 0; i < minified.length; i++) {
        sum += Number(minified[i])
    }

    console.log(sum);
}


bombNumbers([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2])