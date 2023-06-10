// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits
// from that number. 

function oddAndEvenSum(input) {

    let inputToString = String(input);

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < inputToString.length; i++) {
        let currentNumber = Number(inputToString[i])
        if (currentNumber % 2 === 0) {
            evenSum += Number(inputToString[i])
        } else {
            oddSum += Number(inputToString[i])
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
   
}

oddAndEvenSum(3495892137259234)