let mov = require(`./movies-250.json`);//Do not touch


 function getBestMovieBasedOn(genre, length, movieslist){
    let movie = movieslist.movies
    .filter(movie => movie.Genre.split(", ").includes(genre))
    .filter(movie => Number.parseInt(movie.Runtime) >= length*60)
    .reduce((best, current) => {
        return best.imdbRating <= current.imdbRating ? current:best;
    })
    return `${movie.Title} released in ${movie.Year} is the highest rated ${genre} movie over ${length} hour(s) long, with an imdb rating of ${movie.imdbRating}`
}











 

 //Do not touch
console.log(getBestMovieBasedOn('Romance',2, mov));
module.exports=getBestMovieBasedOn;



