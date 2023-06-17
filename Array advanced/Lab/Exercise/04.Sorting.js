// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the
// smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.
// Print the elements on one row, separated by a single space.

function sorting(input) {
    let sorted = input.sort((a, b) => a - b)

    let newSortedArr = []
    let length=input.length
    for (let i = 0; i < length / 2; i++) {
        sorted.shift()
        newSortedArr.unshift()
        sorted.pop()
        newSortedArr.push()
    }
    console.log(newSortedArr);
}

sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])