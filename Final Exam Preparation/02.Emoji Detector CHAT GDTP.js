
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
    let text = input[0];

    let regex = /([*]{2})[A-Z][a-z]{2,}([*]{2})|([:]{2})[A-Z][a-z]{2,}([:]{2})/gm;
    let regexNumber = /[0-9]/gm;

    let coolThreshold = 1;
    let total = 0;

    // Calculate the cool threshold
    let numbers = text.match(regexNumber);
    if (numbers) {
        numbers.forEach((num) => {
            coolThreshold *= Number(num);
        });
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    // Find and print the cool emojis
    let emojis = text.match(regex);
    let coolEmojis = [];

    emojis.forEach((emoji) => {
        let emojiValue = 0;

        for (let i = 2; i < emoji.length - 2; i++) {
            emojiValue += emoji.charCodeAt(i);
        }

        if (emojiValue > coolThreshold) {
            coolEmojis.push(emoji);
        }
    });

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join("\n"));
}

emojiDetector([("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")])
