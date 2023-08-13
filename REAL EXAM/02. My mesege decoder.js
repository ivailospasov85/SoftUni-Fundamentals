

function messageDecoder(input) {

    let n = input.shift()

    let regex = /^([$%])[A-Z][a-z]{2,}(\1): \[(?<fisrst>\d+)\]\|\[(?<second>\d+)\]\|\[(?<third>\d+)\]\|$/gm


    for (let element of input) {


        let match = element.match(regex)

        if (match) {
            let splitetElement = [mesegeName, number] = element.split(' ')
        
            let name = mesegeName.substring(1, mesegeName.length - 2)
            let encryptedMessages = []
            for (let num of number.split('|')) {
                let pureNumber = num.slice(1, -1)
                let transformingNumberToWord = String.fromCharCode(pureNumber)
                encryptedMessages += transformingNumberToWord

            }
            console.log(`${name}: ${encryptedMessages}`);
        } else {
            console.log(`Valid message not found!`);
        }

    }
}

messageDecoder([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
])