import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";
import { runGeneric } from "./generics";
import * as _ from "lodash";

function useLodash(){
    let allMovies: Array<Movie> = Utility.GetAllMovies();

    allMovies.forEach(movie => console.log(_.snakeCase(movie.title)));
}

function decoratorExample(){    
    //Decorator example:
    
    let documentary: Documentary = new Documentary("The Man with 1000 babies", 2024, "Human");
    documentary.printItem();
}

decoratorExample();