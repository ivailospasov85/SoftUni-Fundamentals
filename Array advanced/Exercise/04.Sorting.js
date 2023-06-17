// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the
// smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.
// Print the elements on one row, separated by a single space.

function sorting(input) {
    let sorted = input.sort((a, b) => b - a)

    let newSortedArr = []
    let length = input.length
    for (let i = 0; i < length / 2; i++) {
        let firstNum = sorted.shift()
        let lastNum = sorted.pop()
        newSortedArr.push(firstNum)
        newSortedArr.push(lastNum)

    }
    console.log(newSortedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])