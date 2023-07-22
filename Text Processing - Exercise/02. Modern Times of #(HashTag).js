// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and
// should not be printed.
// Finally, print out all the special words you found without the label (#) on a new line.


function modernTimes(text) {

    let result = []
    let splittedText = text.split(' ')


    for (let word of splittedText) {

        if (word[0] === '#') {
            splittedWords = word.split('')
            str = splittedWords.shift()
            let spt = ''
            for (let el of splittedWords) {

                range = el.charCodeAt() > 64 && el.charCodeAt() < 91 || el.charCodeAt() > 96 && el.charCodeAt() < 123

                if (range) {
                    spt += el

                } else {
                    spt = ''
                    break;
                }
            }
            if (spt.length > 0) {
                result.push(spt)
            }

        }

    }
    result.forEach(element => {
        console.log(element);
    });
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia@'

)