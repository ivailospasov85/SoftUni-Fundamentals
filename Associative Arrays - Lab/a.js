


function shoolGrades(input) {

    let result = {}

    for (const el of input) {
         let [name,valio]=Object.entries(el)
        result[name]=name
    }

    //     let counter = 0
    //     let average = 0
    //     for (let j = 1; j < element.length; j++) {
    //         let grades =Number(element[j])

    //         average += grades 
    //         counter++

    //     }

    //     if (result.has(name)) {
    //         result[name] += average

    //     } else {
    //         result[name] = average


    //     }
    //     // let finallAvarege = (average / counter).toFixed(2)
    //     result[name] = average

    // }
    console.log(result);
}
shoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)