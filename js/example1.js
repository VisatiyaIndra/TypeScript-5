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
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const functions = __importStar(require("./functions"));
class main {
    constructor() { }
    Run() {
        let movie = functions.GetReview("George Lucas");
        console.log("List of all moview by the director:");
        movie.forEach(x => console.log(`    ${x}`));
        let LogeMessageWithArrowFunc = (message) => console.log(`${message}`);
        console.log("Most popular bollywood movie review:");
        functions.PrintMovieInfo("3 Idiots", 2009, "Aamir Khan", "Sharman Joshi", "R Madhavan", "Kareena Kapoor", "Boman Irani");
        functions.LogMessage("Enjoy the day!");
        //The example of arrow function
        LogeMessageWithArrowFunc("Hey! I'm using arrow function.");
    }
}
exports.main = main;
