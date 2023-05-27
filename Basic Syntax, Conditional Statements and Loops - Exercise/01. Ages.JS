
// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// • 0-2 (age) – is a baby;
// • 3-13 (age) – is a child;
// • 14-19 (age) – is a teenager;
// • 20-65 (age) – is an adult;
// • >=66 (age) – is an elder;
// • In all other cases print – "out of bounds";
// The output should be printed to the console

function ages(number) {
    let age = ''

    if (number < 0) {
        age = "out of bounds"
    }
    else if (number >= 0 && number <= 2) {
        age = "baby"
    } else if (number <= 13) {
        age = 'child'
    } else if (number <= 19) {
        age = 'teenager'
    } else if (number <= 65) {
        age = 'adult'
    } else if (number >= 66) {
        age = 'elder'
    } else {
        age = 'out of bounds'
    }


    console.log(age);
}

ages(-20)