// You are an astronaut who just embarked on a mission across the solar system. Since you will be in space for a long time, you have packed a lot of food with you. Create a program, which helps you identify how much food you have left and gives you information about its expiration date.
// On the first line of the input, you will be given a text string. You must extract the information about the food and calculate the total calories. 
// First, you must extract the food info. It will always follow the same pattern rules:
// •	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
// #{item name}#{expiration date}#{calories}#   or 
// |{item name}|{expiration date}|{calories}|
// •	The item name will contain only lowercase and uppercase letters and whitespace
// •	The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long
// •	The calories will be an integer between 0-10000
// Calculate the total calories of all food items and then determine how many days you can last with the food you have. Keep in mind that you need 2000kcal a day.
// Input / Constraints
// •	You will receive a single string
// Output
// •	First, print the number of days you will be able to last with the food you have:
// "You have food to last you for: {days} days!"
// •	The output for each food item should look like this:
// "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"


function adAstra(text) {
    let regex = /([|]|[#])(?<item>[A-Za-z\s]+)\1(?<expiration>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm
    let totalCalories = 0
    let match = regex.exec(text)
    let buff = ''
    while (match) {
        let item = match.groups['item']
        let expiration = match.groups['expiration']
        let calories = match.groups['calories']
        totalCalories += Number(calories)

        buff += `Item: ${item}, Best before: ${expiration}, Nutrition: ${calories}\n`;
        match = regex.exec(text)
    }
    totalCalories = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${totalCalories} days!`);
    console.log(buff);
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
)