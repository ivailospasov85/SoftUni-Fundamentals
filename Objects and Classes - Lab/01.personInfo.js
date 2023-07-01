// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age

function personInfo(firstName, lastName, age) {

    let obj = {
        firstName: firstName,
        lastName: lastName,
        age: age

    }
    return obj
}
personInfo("Peter",
    "Pan",
    "20"
)