import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFileFormat) {
        if (typeof newFileFormat === 'string') {
            this._fileFormat = newFileFormat;
        } else {
            console.error('New file format should be string.')
        }
    }
        printInfo() {
            super.printInfo();
            console.log(`File format: ${this._fileFormat}`);
    }

    static createFromBookAndFormat(book, fileFormat) {
        return new EBook(book.name, book.author, book.year, fileFormat);
    }
}