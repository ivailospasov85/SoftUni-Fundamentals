// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result
// depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this
// task using arrow functions.




function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;

    let caseMultiply = (a, b) => a * b;
    let caseDivide = (a, b) => a / b;
    let caseAdd = (a, b) => a + b; numOne, numTwo
    let caseSubtract = (a, b) => a - b;

    switch (operator) {
        case "multiply":
            result = caseMultiply(numOne, numTwo);
            break;
        case "divide":
            result = caseDivide(numOne, numTwo);
            break;
        case "subtract":
            result = caseSubtract(numOne, numTwo);
            break;
        case "add":
            result = caseAdd(numOne, numTwo);
            break;
    }
    console.log(result);
}

simpleCalculator(5, 5, 'multiply')