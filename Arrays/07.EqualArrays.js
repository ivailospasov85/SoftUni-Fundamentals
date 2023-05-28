// Write a program, which receives two string arrays containing number representations, and prints on the console
// whether they are identical.
// Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array
// and print the following message:
// `Arrays are identical. Sum: {sum}`
// If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
// `Arrays are not identical. Found difference at {index} index`


function equalArrays(firstArr, secondArr,) {


    let arr1 = 0
    let arr2 = 0

    let sum = 0
    for (let i = 0; i < firstArr.length; i++) {
        arr1 = Number(firstArr[i])
        sum += arr1
        for (let i = 0; i < secondArr.length; i++) {
            arr2 = Number(secondArr[i])
        }

        if (arr1 === arr2) {
            console.log(`Arrays are identical. Sum: ${sum}`);
        } else if (arr1 > arr2) {
            console.log(`Arrays are not identical. Found difference at ${arr1} index`);
        } else {
            console.log(`Arrays are not identical. Found difference at ${arr2} index`);
        }
    }
}


equalArrays(['10', '20', '30'],
    ['10', '20', '30'])