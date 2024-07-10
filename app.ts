import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";
import { runGeneric } from "./generics";


let allMovies: Array<Movie> = Utility.GetAllMovies();