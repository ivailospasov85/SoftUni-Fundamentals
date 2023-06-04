// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number


function magicSum(array, magicNumber) {

    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            let currentNumber = Number(array[i - 1])
            for (let j = i; j < array.length; j++) {
                let nextNumber = Number(array[j])

                let number = currentNumber + nextNumber
                if (number === magicNumber) {
                    console.log(currentNumber, nextNumber);

                }
            }
        }
    }
}





magicSum([1, 2, 3, 4, 5, 6],
    6

)