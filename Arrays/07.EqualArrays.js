// Write a program, which receives two string arrays containing number representations, and prints on the console
// whether they are identical.
// Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array
// and print the following message:
// `Arrays are identical. Sum: {sum}`
// If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
// `Arrays are not identical. Found difference at {index} index`


function equalArrays(firstArr, secondArr,) {


    let arr1 = []
    let arr2 = []

    let sum = 0
    for (let i = 0; i < firstArr.length; i++) {
        arr1[i] = Number(firstArr[i])
    }
    for (let i = 0; i < secondArr.length; i++) {
        arr2[i] = Number(secondArr[i])
    }

    areEqual = true
    for (i = 0; i < firstArr.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual = false
            break;
        }
    }
    if (areEqual) {
        for (let sumOfArray of arr1) {
            sum += Number(sumOfArray)
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
        ;
    }


}



equalArrays(['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5'])