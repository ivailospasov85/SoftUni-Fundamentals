// Write a function that receives a single integer number n and prints nxn matrix with that number.

function nxnMatrix(n) {

    for (let i = 1; i <= n; i++) {
        let row = ''
        for (let j = 1; j <= n; j++) {
            row += Number(n) + " "
        }
        console.log(row);
    }
}

nxnMatrix(3)