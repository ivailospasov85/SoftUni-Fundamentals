// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare
// the first array with the second array.

function commonElements(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++){
        let currentElement=firstArray[i]
        if(secondArray.includes(currentElement)){
            console.log(currentElement);
        }
    }


}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])