
// Write a JS function that rounds numbers to a specific precision.
// The input comes as two numbers. The first value is the number to be rounded and the second is the precision
// (significant decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.
// Remove trailing zeroes, if any (you can use parseFloat (number))
// The output should be printed to the console. Do not print insignificant decimals.

function rounding(number, precision) {
    
    if (precision > 15) {
        precision = 15
    }
    let result = parseFloat(number.toFixed(precision))
    
console.log(result);

}

rounding(10.5,3)