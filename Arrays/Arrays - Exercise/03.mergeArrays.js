// Write a function, which receives two string arrays and merges them into a third array.
// • If the index of the element is even, add into the third array the sum of both elements at that index
// © SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.

// Follow us: Page 2 of 7
// • If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input, you will receive two string arrays (with equal length).
// Output
// As output, you should print the resulting third array, each element separated by " - 

function mergeArray(firstArr, secondArr) {
    let newArr = []
    for (let index = 0; index < firstArr.length; index++) {
        if (index % 2 === 0) {
            //    let num[] = Number(firstArr[index]) + Number(secondArr[index])
            newArr[index] = Number(firstArr[index]) + Number(secondArr[index])
        } else {
            newArr[index] = firstArr[index] + secondArr[index]
        }

    }
    console.log(newArr.join(" - "));

}

mergeArray(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])