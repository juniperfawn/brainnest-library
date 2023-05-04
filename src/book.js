import {myLibrary} from "./index.js"
import {updateCounters ,displayBooks} from "./displayBooks.js"


class Book {

    constructor(title, author, pages, language, read) {
        this.title = title.toUpperCase().trim();
        this.author = author.trim();
        this.pages = pages;
        this.language = language;
        this.read = read;
    }
    

}






export {Book};