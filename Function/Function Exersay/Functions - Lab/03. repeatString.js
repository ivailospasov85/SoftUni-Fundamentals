// Write a function that receives a string and a repeat count n. The function should return a new string (the old one
//     repeated n times).


function repeatString(str, number) {

    let newStr = str.repeat(number)
    console.log(newStr);
}
repeatString("abc", 3)