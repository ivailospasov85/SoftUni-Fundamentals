// Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a
// weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice,
// the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings.

function meeting(input) {

    let scheduled = {}
    for (const el of input) {
        let [day, name] = el.split(' ')

        if (scheduled.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduled[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key in scheduled) {
        console.log(`${key} -> ${scheduled[key]}`);

    }
}


meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])