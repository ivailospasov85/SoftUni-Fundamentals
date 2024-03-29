// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to
// the party check if he/she contains in any of the two reservation lists.
// The input will come as an array of strings. You will be given the list with the guests before you receive a command
// "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

function partyTime(input) {

    let vipList = []
    let regular = []
    let result = []

    let command = input.shift()

    while (command !== 'PARTY') {

        if (isNaN(command[0])) {
            regular.push(command)

        } else {
            vipList.push(command)
        }
        command = input.shift()
    }

    for (const guests of input) {
        if (vipList.includes(guests)) {
            let vipIndex = vipList.indexOf(guests)
            vipList.splice(vipIndex, 1)
        } else if (regular.includes(guests)) {
            let regIndex = regular.indexOf(guests)
            regular.splice(regIndex, 1)
        }
    }
    result = vipList.concat(regular)

    console.log(result.length);
    
    result.forEach(element => {
        console.log(element);
    })
}

partyTime([
    'Ce8vwPmE',
    'SVQXQCbc',
    '7IK9Yo0h',
    '9NoBUajQ',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)