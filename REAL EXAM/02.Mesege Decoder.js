// © SoftUni – about.softuni.bg. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.                         Follow us: Page 1 of 2 Problem 2 - Message Decrypter  Create a program that checks if inputs have a valid message and decrypt it. On the first line, you will receive a number that indicates how many inputs you will receive on the following lines. A message is valid when: • There is nothing else before and after it • It starts with a tag, which is surrounded by either "$" or "%" (but not both at the same time). The tag itself has to be minimum 3 characters long, start with an uppercase letter, followed only by lowercase letters • There is a colon and a single white space after the tag • There are 3 groups consisting of numbers between "[" and "]", followed by a pipe ("|") Example for a valid message:  "$Request$: [73]|[115]|[32]|" You must check if the message is valid, and if it is - decrypts it. If it isn't - print the following message:  "Valid message not found!" Decrypting a message means taking all numbers and turn them into ASCII symbols. After successful decrypt, print it in the following format: "{tag}: {decryptedMessage}" Input • On the first line - n - the count of inputs. • On the next n lines - input that you have to check if it has a valid message. Output • Print all results from each input, each on a new line.

function messageDecoder(inputs) {

    function isValidMessage(text) {
        let pattern = /^([$]|[%])([A-Z][a-z]{2,})\1:\s(\[\d+\]\|\[\d+\]\|\[\d+\]\|)$/;
        return pattern.test(text);
    }

    function decryptMessage(text) {
        let decrypted = [];
        let numbers = text.match(/\[(\d+)\]/g);
        if (numbers) {
            for (let number of numbers) {
                let asciiCode = parseInt(number.slice(1, -1));
                decrypted.push(String.fromCharCode(asciiCode));
            }
        }
        return decrypted.join('');
    }

    let numInputs = parseInt(inputs[0]);
    for (let i = 1; i <= numInputs; i++) {
        let inputText = inputs[i];
        if (isValidMessage(inputText)) {
            let tag = inputText.match(/^([$]|[%])([A-Z][a-z]{2,})\1/)[2];
            let decryptedMessage = decryptMessage(inputText);
            console.log(`${tag}: ${decryptedMessage}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

messageDecoder([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);

messageDecoder((["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"]))