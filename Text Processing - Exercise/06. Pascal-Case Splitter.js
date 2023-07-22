// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function PascalCaseSplitter(text) {
    let splittedText = text.split('')
    let startIndex;
    let buff=''
    for (let element of splittedText) {

        if (element.charCodeAt() > 64 && element.charCodeAt() < 91) {
            startIndex = splittedText.indexOf(element)
            buff+=startIndex
        }

    };
    console.log(buff);
}

PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')