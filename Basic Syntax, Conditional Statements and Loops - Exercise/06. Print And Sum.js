// Write a function that displays numbers from given start to given end and their sum. The input comes as two
// number parameters. Print the result like the examples below

function prinAndSum(start, end) {
    let buff = ''
    let sum = 0
    for (i = start; i <= end; i++) {
        sum += i
        buff += `${i} `

    }
    console.log(buff);
    console.log(`Sum: ${sum}`);

}



prinAndSum(5, 10)