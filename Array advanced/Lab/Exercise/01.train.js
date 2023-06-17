// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the
// number of passengers that are currently in a wagon.
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// • Add {passengers} – add a wagon to the end with the given number of passengers.
// • {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space)

function train(data) {



    let arr = data[0].split(' ').map(Number)
    let maxCapacityOfWagon = Number(data[1])

    for (let i = 2; i < data.length; i++) {
        let currentCommand = data[i].split(' ')

        if (currentCommand[0] === "Add") {
            arr.push(Number(currentCommand[1]))
        } else {
            let passengers = Number(currentCommand[0])

            for (let j = 0; j < arr.length; j++) {
                let currentWagon = Number(arr[j])
                let freeSpaceWagons = maxCapacityOfWagon - currentWagon

                if (freeSpaceWagons >= passengers) {
                    arr[j] += passengers
                    break;
                }
            }
        }

    }

    console.log(arr.join(' '));

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)