// Write a function that stores information about movies inside an array. The movie's object info must be name,
// director, and date. You can receive several types of input:
// • "addMovie {movie name}" – add the movie
// • "{movie name} directedBy {director}" – check if the movie exists and then add the director
// • "{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in
// JSON format.

function movies(array) {
    let result = [];

    array.forEach(element => {
        if (element.includes('addMovie ')) {
            let name = element.split('addMovie ')[1];
            result.push({ name });
        } else if (element.includes(' directedBy ')) {
            let [movieName, director] = element.split(' directedBy ');

            let movie = result.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (element.includes(' onDate ')) {
            let [movieName1, date] = element.split(' onDate ');
            let movie = result.find(m => m.name === movieName1);
            if (movie) {
                movie.date = date;
            }
        }
    })

    result.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)