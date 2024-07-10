import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";
import { runGeneric } from "./generics";
import * as _ from "lodash";

let allMovies: Array<Movie> = Utility.GetAllMovies();

allMovies.forEach(movie => console.log(_.snakeCase(movie.title)));