import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary } from "./classes";
import * as Utility from "./functions";

function getMoviesByDirector(director: string): Promise<string[]>{

    let ps: Promise<string[]> = new Promise((resolve, reject) => {

        setTimeout(() => {
            let foundMovies: string[] = Utility.GetTitles(director);

            if(foundMovies.length > 0){
                resolve(foundMovies);
            }else{
                reject('No movies found for that director.')
            }
        }, 1000);
    });

    return ps;
}

function callPromiseMethod(director: string){
    getMoviesByDirector(director)
    .then(titles => {
        printMovieTitles(titles);
        return titles.length;
    })
    .then(titleLength => console.log(`\nNumber of movies: ${titleLength}`))
    .catch(reason => console.log(`Error: ${reason}`));
}

function printMovieTitles(titles: string[]){
    console.log(`\nFound titles: \n`)
        for(let title of titles){
            console.log(`   ${title}`)
        }
}

async function getMoviesByDirectorAsync(director:string) {    
    let titles = await getMoviesByDirector(director);
    printMovieTitles(titles);
} 

console.log('Searching.....');
const director: string = "George Lucas";

getMoviesByDirectorAsync(director)
.catch(error => console.log(error));

console.log('Search submitted...');