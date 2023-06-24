// You will receive two arrays of integers. The second array is containing exactly three numbers.
// The first number represents the number of elements you have to take from the first array (starting from the first
// one).
// The second number represents the number of elements you have to delete from the numbers you took (starting
// from the first one).
// The third number is the number we search in our collection after the manipulations.
// As output print how many times that number occurs in our array in the following format:
// "Number {number} occurs {count} times."

function searchForNumber(firstElements, secondElements) {

    let startingArr = firstElements.splice(0, secondElements[0])

    let newArr = startingArr.splice(0, secondElements[1])
    let counter = 0
    for (let n = 0; n < startingArr.length; n++) {
        let element = Number(startingArr[n])
        if (element === (Number(secondElements[2]))) {
            counter++
        }
    }
    console.log(`Number ${secondElements[2]} occurs ${counter} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])