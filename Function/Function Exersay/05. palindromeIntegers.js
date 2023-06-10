// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which
// receives an array of positive integers and checks if each integer is a palindrome or not.


function palindromeIntegers(arrays) {

    let isPalindromes = false

    for (let i = 0; i < arrays.length; i++) {
        let currentNumber = String(arrays[i])
        let arrayRotation = currentNumber.split('').reverse().join('')

        if (arrayRotation === currentNumber) {
            isPalindromes = true
        } else {
            isPalindromes = false
        }

        console.log(isPalindromes);
    }

}

palindromeIntegers([32, 2, 232, 1010])