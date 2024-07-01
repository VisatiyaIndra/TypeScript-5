"use strict";
// function GetReview(title: string): string | number{
//     if(title == "Titanic"){
//         return "This is the fantastic movie!";
//     }else{
//         return Math.floor(Math.random() * 10);
//     }        
// }
function PrintMovieInfo(title, yearReleased, ...cast) {
    console.log(`Title: ${title}`);
    console.log(`Year released: ${yearReleased}`);
    console.log("Cast: ");
    for (const name of cast) {
        console.log(`   ${name}`);
    }
}
function LogMessage(message) {
    console.log(`${message}`);
}
function GetAllMovies() {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
        { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
        { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
        { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
        { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
        { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
        { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
        { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
}
// function GetReview(director: string): string[];
// function GetReview(director: string, streaming: boolean): string[];
function GetReview(director, streaming) {
    const allMovies = GetAllMovies();
    let searchMovies = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director == director && movie.streaming == streaming) {
                searchMovies.push(`Movie: ${movie.title}, Year Released: ${movie.yearReleased}`);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director == director) {
                searchMovies.push(`Movie: ${movie.title}, Year Released: ${movie.yearReleased}`);
            }
        }
    }
    return searchMovies;
}
let movie = GetReview("George Lucas");
movie.forEach(x => console.log(`${x}`));
//let LogeMessageWithArrowFunc = (message: string) => console.log(`${message}`);
// let movie1: string = "Titanic";
// let movie2: string = "Avengers";
// let review = GetReview(movie2);
// if(typeof(review) == "string"){
//     console.log(`The moview ${movie1} review: ${review}`)
// }else{
//     console.log(`The rating for the movie ${movie2}: ${review}/10`)
// }
//PrintMovieInfo("3 Idiots", 2009, "Aamir Khan", "Sharman Joshi", "R Madhavan", "Kareena Kapoor", "Boman Irani");
// LogMessage("Enjoy the day!");
// LogeMessageWithArrowFunc("Hey! I'm using arrow function.");
