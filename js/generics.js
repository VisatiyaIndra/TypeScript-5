"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runGeneric = runGeneric;
const classes_1 = require("./classes");
const Utility = __importStar(require("./functions"));
function getMoviesByDirector(director) {
    let ps = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = Utility.GetTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject('No movies found for that director.');
            }
        }, 1000);
    });
    return ps;
}
function callPromiseMethod(director) {
    getMoviesByDirector(director)
        .then(titles => {
        printMovieTitles(titles);
        return titles.length;
    })
        .then(titleLength => console.log(`\nNumber of movies: ${titleLength}`))
        .catch(reason => console.log(`Error: ${reason}`));
}
function printMovieTitles(titles) {
    console.log(`\nFound titles: \n`);
    for (let title of titles) {
        console.log(`   ${title}`);
    }
}
function getMoviesByDirectorAsync(director) {
    return __awaiter(this, void 0, void 0, function* () {
        let titles = yield getMoviesByDirector(director);
        printMovieTitles(titles);
    });
}
function callAsyncMethod() {
    console.log('Searching.....');
    const director = "George Lucas";
    getMoviesByDirectorAsync(director)
        .catch(error => console.log(error));
    console.log('Search submitted...');
}
function runGeneric() {
    let allMovies = Utility.GetAllMovies();
    let favorites = new classes_1.Favorites();
    allMovies.forEach(movie => favorites.add(movie));
    let topMovie = favorites.getFirst();
    let findMovie = favorites.filterItem("A New Hope");
    console.log(`Movie: Title - ${findMovie.title} Year Released: ${findMovie.yearReleased}`);
}
//# sourceMappingURL=generics.js.map