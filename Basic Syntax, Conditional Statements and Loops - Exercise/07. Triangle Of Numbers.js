// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// © SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.

// Follow us: Page 4 of 9
// Constraints
// • n will be in the interval [1...20]

function triangleOfNumbers(number){


    let buff = ''
        for (i = 1; i <= number; i++) {
            buff=''
            for (y = 1; y <= i; y++) {
                buff +=`${i} `    
                
            } 
            
            console.log(buff);
        }
       
       
    }



triangleOfNumbers(3)