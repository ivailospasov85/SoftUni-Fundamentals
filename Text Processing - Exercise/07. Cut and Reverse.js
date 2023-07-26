// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.


function cutAndReverse(text) {
    let arr = Array.from(text)
    let s = arr.splice(0, arr.length / 2).reverse()
    let ss = arr.splice(0, arr.length).reverse()
    console.log(s.join(''));
    console.log(ss.join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')