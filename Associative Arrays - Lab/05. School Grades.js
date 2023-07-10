// Write a function that stores students and their grades throughout the year. If a student appears more than once,
// add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by
// student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.


function shoolGrades(input) {

    let result = new Map

    for (let index = 0; index < input.length; index++) {
        let element = input[index].split(' ');
        let name = element.shift()

        // let counter = 0
        // let average = 0
        // for (let j = 0; j < element.length; j++) {
        //     let grades = element[j]

        //     average += grades
        //     counter++



        if (result[name] === name) {
            result[name] += element.join()

        } else {
            result[name] = element


        }
        // let finallAvarege = (average / counter).toFixed(2)





    }
    console.log(result);
}

shoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)