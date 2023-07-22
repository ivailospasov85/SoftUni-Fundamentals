// Write a function that receives a string and prints all the characters on separate lines

function textCharacters(input) {

    input.split('').forEach(element => {
        console.log(element);
    });

}

textCharacters('AWord')