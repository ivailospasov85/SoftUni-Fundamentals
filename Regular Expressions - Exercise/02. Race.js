// Write a function that processes information about a race. On the first line, you will be given a list of participants
// separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will
// be some alphanumeric characters. In between them, you could have some extra characters which you should
// ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits
// is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the
// list of racers contains the name of the person. If you receive the same person more than once just add the
// distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
// "1st place: {first racer}
// 2nd place: {second racer}
// 3rd place: {third racer}"


function race(input) {
   
    let object = {}
    let names = input.shift().split(', ')

    names.forEach(name => {
        object[name] = 0
    });

    let regexName = /(?<name>[A-Za-z]+)/g
    let regexDistance = /(?<distance>[0-9]?)/g

    let index = 0
    let command = input[index]
    index++

    while (command !== 'end of race') {

        let name = command.match(regexName).join('')
        let distance = (command.match(regexDistance).join('').split(''))
        let passedDistances = 0

        distance.forEach(el => {
            passedDistances += Number(el)
        });

        if (object.hasOwnProperty(name)) {
            object[name] += Number(passedDistances)
        }

        command = input[index]
        index++

    }

    let sorted = Object.entries(object).sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}

race(['Ronald, Bill, Tom, Timmy,Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])