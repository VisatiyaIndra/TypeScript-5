"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popular = exports.Video = void 0;
class Video {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = '';
        console.log("Creating a new video....");
    }
    printItm() {
        console.log(`${this.title} was released in ${this.year}.`);
        if (this.Producer !== '') {
            console.log(`The producer is ${this.Producer}`);
        }
    }
    get Producer() {
        return this._producer.toUpperCase();
    }
    set Producer(name) {
        this._producer = name;
    }
}
exports.Video = Video;
class Popular extends Video {
    constructor(title, year, subject) {
        super(title, year);
        this.subject = subject;
    }
    printItm() {
        super.printItm();
        console.log(`The subject is ${this.subject}`);
    }
}
exports.Popular = Popular;
