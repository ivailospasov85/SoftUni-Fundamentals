// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function PascalCaseSplitter(text) {
    let rez = []
    let startIndex = 0

    for (let i = 1; i < text.length; i++) {

        if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
            rez.push(text.substring(startIndex, i))
            startIndex = i
        }

    };
    rez.push(text.substring(startIndex))
    console.log(rez.join(', '));
}

PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')