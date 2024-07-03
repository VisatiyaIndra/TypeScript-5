import * as functions from "./functions";

export class main{

    constructor(){}

    Run(): void {
        let movie = functions.GetReview("George Lucas");

        console.log("List of all moview by the director:")
        movie.forEach(x => console.log(`    ${x}`));

        let LogeMessageWithArrowFunc = (message: string) => console.log(`${message}`);

        console.log("Most popular bollywood movie review:")
        functions.PrintMovieInfo("3 Idiots", 2009, "Aamir Khan", "Sharman Joshi", "R Madhavan", "Kareena Kapoor", "Boman Irani");

        functions.LogMessage("Enjoy the day!");

        //The example of arrow function
        LogeMessageWithArrowFunc("Hey! I'm using arrow function.");
    }
}
