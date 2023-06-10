// Write a function that checks if a given password is valid. Password validations are:
// • The length should be 6 - 10 characters (inclusive)
// • It should consist only of letters and digits
// • It should have at least 2 digits
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// • "Password must be between 6 and 10 characters"
// • "Password must consist only of letters and digits"
// • "Password must have at least 2 digits"


function passwordValidator(password) {
    let isValid = true
    let isValidPasswordLength = password.length >= 6 && password.length <= 10
    let onlyLettersAndDigits = true

    let digitsCounter = 0


    if (!isValidPasswordLength) {
        isValid = false
        console.log("Password must be between 6 and 10 characters");
    }
    for (let i = 0; i < password.length; i++) {
        let currentChart = password.charCodeAt(i)
        let isNotDigits = currentChart < 48 || currentChart > 57;
        let isDigits = currentChart >= 48 && currentChart <= 57;
        let isNotSmallLetter = currentChart < 97 || currentChart > 122;
        let isNotBigLetter = currentChart < 65 || currentChart > 90;

        if (isDigits) {
            digitsCounter++
        }
        if (isNotDigits && isNotSmallLetter && isNotBigLetter) {
            isValid = false
            onlyLettersAndDigits = false
        }
    }

    if (!onlyLettersAndDigits) {
        isValid = false
        console.log("Password must consist only of letters and digits");
    }

    if (digitsCounter >= 2 && digitsCounter !== 0) {

    } else {
        isValid = false
        console.log("Password must have at least 2 digits");
    }
    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidator('Pictures')