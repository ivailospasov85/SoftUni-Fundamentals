// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak
// // should be the file name, while pptx is the extension)


function extractFile(input) {
    let startingIndex = input.lastIndexOf('\\')
    let endingIndex = input.lastIndexOf('.')

    let fileName = input.substring(startingIndex + 1, endingIndex)
    let fileExtension = input.substring(endingIndex + 1)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')