// Write a function that collects and orders information about travel destinations.
// As input, you will receive an array of strings.
// Each string will consist of the following information with the format:
// "Country name > Town name > Travel cost"
// © SoftUni – https://softuni.bg. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.

// Follow us: Page 6 of 9
// The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may
// have several Towns to visit.
// After you finish the organizational part, you need to let Steven know which destination point to visit first. The order
// will be as follows: First sort Country names alphabetically and then sort by lowest Travel cost.


function travelTime(input) {
    let destinations = {};

    for (let destinationInfo of input) {
        let [country, town, cost] = destinationInfo.split(" > ");
        cost = Number(cost);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }

        if (!destinations[country].hasOwnProperty(town) || destinations[country][town] > cost) {
            destinations[country][town] = cost;
        }
    }

    let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let sortedTowns = Object.keys(destinations[country]).sort((a, b) => destinations[country][a] - destinations[country][b]);
        console.log(`${country} -> ${sortedTowns.map(town => `${town} -> ${destinations[country][town]}`).join(' ')}`);
    }
}


travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)
