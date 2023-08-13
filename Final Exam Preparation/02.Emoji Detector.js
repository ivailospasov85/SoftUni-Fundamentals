// Your task is to write a program that extracts emojis from a text and find the threshold based on the input.
// You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  The cool threshold could be a huge number, so be mindful.
// An emoji is valid when:
// •	It is surrounded by 2 characters, either "::" or "**"
// •	It is at least 3 characters long (without the surrounding symbols)
// •	It starts with a capital letter
// •	Continues with lowercase letters only
// Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
// Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
// You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
// Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
// You need to print the result of the cool threshold and, after that to take all emojis out of the text, count them and print only the cool ones on the console.
// Input
// •	On the single input, you will receive a piece of string. 
// Output
// •	On the first line of the output, print the obtained Cool threshold in the format:
// "Cool threshold: {coolThresholdSum}"
// •	On the following line, print the count of all emojis found in the text in format:
// "{countOfAllEmojis} emojis found in the text. The cool ones are:
// {cool emoji 1}
// {cool emoji 2}
// …
// {cool emoji N}"
// Constraints
// There will always be at least one digit in the text!

function emojiDetector(input) {

    let text = input.toString()

    let regex = /([*]{2})[A-Z][a-z]{2,}([*]{2})|([:]{2})[A-Z][a-z]{2,}([:]{2})/gm
    let regexNumber = /[0-9]/gm
    
    let totalCoolThreshold = 1
    let total = 0
    
    let match = [...text.matchAll(regex)]
    let number = [...text.matchAll(regexNumber)]

    for (let el of number) {
        totalCoolThreshold = totalCoolThreshold * Number(el[0])
    }

    console.log(`Cool threshold: ${totalCoolThreshold}`);

    let count = match.length
    console.log(`${count} emojis found in the text. The cool ones are:`)


    for (let element of match) {

        if (element[0].startsWith("::")) {
            let word = element[0].split('::')
            word = word.join('')
            for (let el of word) {
                let NumberOfIndex = el.charCodeAt()
                total += Number(NumberOfIndex)
            }
        } else if (element[0].startsWith("**")) {
            let word = element[0].split('**')
            word = word.join('')
            for (let el of word) {
                let NumberOfIndex = el.charCodeAt()
                total += Number(NumberOfIndex)
            }
        }

        if (total > totalCoolThreshold) {
            console.log(`${element[0]}`);
            total = 0
        }
        

    }
}





emojiDetector([("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")])

