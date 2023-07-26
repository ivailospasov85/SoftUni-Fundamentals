








function matchPhoneNumber(input) {

    let result = []

    let patern = /\+359\-?\s?2\-?\s?\d{3}\-?\s?\d{4}\b/g


    let phoneNumbersToCheck = ['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222']

    let phone = patern.exec(phoneNumbersToCheck)
    while (phone) {
        result.push(phone[0])
        phone = patern.exec(phoneNumbersToCheck)
    }
    console.log(result.join(' '));

}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])