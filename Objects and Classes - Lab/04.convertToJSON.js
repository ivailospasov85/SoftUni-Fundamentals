// Convert to JSON
// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.

function convertToJSON(firstName, lastName, hairColor) {
    let obj = {
        firstName,
        lastName,
        hairColor
    }
    let JasonStr = JSON.stringify(obj)
    console.log(JasonStr);
}

convertToJSON('George', 'Jones',
    'Brown')