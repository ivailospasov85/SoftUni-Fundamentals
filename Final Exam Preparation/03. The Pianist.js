// You are a pianist, and you like to keep a list of your favorite piano pieces. Create a program to help you organize it and add, change, remove pieces from it!
// On the first line of the standard input, you will receive an integer n – the number of pieces you will initially have. On the next n lines, the pieces themselves will follow with their composer and key, separated by "|" in the following format: "{piece}|{composer}|{key}".
// Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
// •	"Add|{piece}|{composer}|{key}":
// o	You need to add the given piece with the information about it to the other pieces and print:
// "{piece} by {composer} in {key} added to the collection!"
// o	If the piece is already in the collection, print:
// "{piece} is already in the collection!"
// •	"Remove|{piece}":
// o	If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"
// o	Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// •	"ChangeKey|{piece}|{new key}":
// o	If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"
// o	Otherwise, print:
// "Invalid operation! {piece} does not exist in the collection."
// Upon receiving the "Stop" command, you need to print all pieces in your collection in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"
// Input/Constraints
// •	You will receive a single integer at first – the initial number of pieces in the collection
// •	For each piece, you will receive a single line of text with information about it.
// •	Then you will receive multiple commands in the way described above until the command "Stop".
// Output
// •	All the output messages with the appropriate formats are described in the problem description.


function thePianist(array) {

    let specialN = Number(array.shift())
    let object = []

    for (let index = 0; index < specialN; index++) {

        let el = [piece, composer, key] = array[index].split('|')

        song = {
            piece: el[0],
            composer: el[1],
            key: el[2],
        }

        object.push(song)
    }
    let index = specialN
    let element = array[index]
    index++

    while (element !== 'Stop') {
        let [command, piece, composer, key] = element.split('|')

        switch (command) {

            case 'Add':
                let existingPiece = object.find((song) => song.piece === piece)
                if (!existingPiece) {
                    song = {
                        piece: piece,
                        composer: composer,
                        key: key,

                    }
                    object.push(song)
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                element = array[index]
                index++
                break;

            case 'Remove':
                let indexOfPiece = object.findIndex((song) => song.piece === piece);
                if (indexOfPiece !== -1) {

                    object.splice(indexOfPiece, 1)
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                element = array[index]
                index++
                break;
                
            case 'ChangeKey':
                let songToUpdate = object.find((song) => song.piece === piece);
                if (songToUpdate) {
                    songToUpdate.key = composer;
                    console.log(`Changed the key of ${piece} to ${composer}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                element = array[index]
                index++
                break;
        }
    }
    object.forEach(song => {
        console.log(`${song.piece} -> Composer: ${song.composer}, Key: ${song.key}`);
    });
}



thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])