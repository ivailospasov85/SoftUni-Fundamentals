// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive
// or negative. Try to do this WITHOUT multiplying the 3 numbers



    function signCheck(numOne, numTwo, numThree) {
        const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;
      
        if (negativeCount % 2 === 0) {
          console.log("Positive");
        } else {
          console.log("Negative");
        }
      }
      




signCheck(-6,
    -12,
    14
)