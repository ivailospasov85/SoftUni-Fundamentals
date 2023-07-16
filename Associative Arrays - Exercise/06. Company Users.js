// // Write a function, which keeps the information about companies and their employees.
// // You will receive an array of strings containing the company name and employee's id. Add each employee to the
// // given company. Keep in mind that a company cannot have two employees with the same id.
// // When you finish reading data, order the companies by their name in ascending order.
// // Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
// • The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// • The input always will be valid.

function companyUsers(input) {
    let set = {};

    input.forEach(element => {
        let [companyName, employeeId] = element.split(" ->");
        if (!set.hasOwnProperty(companyName)) {
            set[companyName] = [];
        }
        set[companyName].push(employeeId);
    });
    let sorted = Object.entries(set).sort()
    sorted.forEach(el => {
        console.log(el[0]);
        let id = new Set(el[1])
        id.forEach(id => {
            console.log(`--${id}`);
        })
    })

}




companyUsers([
    'SoftUni ->AA12345',
    'SoftUni ->BB12345',
    'Microsoft -> CC12345',
    'HP ->BB12345'
]
)