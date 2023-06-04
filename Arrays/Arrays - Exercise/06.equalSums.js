// Write a function that determines if there exists an element in the array of numbers such that the sum of the
// elements on its left is equal to the sum of the elements on its right.
// If there are NO elements to the left/right, their sum is 0.
// Print the index that satisfies the required condition or "no" if there is no such index

function equalSums(input) {
    let leftSum = 0
    let rightSum = 0
    let isEqual = false
    let num = 0

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {

            if (i !== j) {
                num = Number(input[j]);
            } if (j < i) {
                leftSum += num

            } else if (j > i) {
                rightSum += num
            }
            if (i === 0) {
                leftSum = 0;
            } else if (i === input.length - 1) {
                rightSum = 0;
            }
        }

        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true
        } else {
            leftSum = 0
            rightSum = 0
        }


    }
    if (!isEqual) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3])