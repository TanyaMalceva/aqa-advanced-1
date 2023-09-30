export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`${this._name}`);
        console.log(`${this._author}`);
        console.log(`${this._year}`);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.error('Name must be a string.');
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string') {
            this._author = newAuthor;
        } else {
            console.error('Author must be a string.');
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear >= 2009) {
            this._year = newYear;
        } else {
            console.error('Publication year must be a number greater than or equal to 2009 year.');
        }
    }

    static findOldestBook(books) {
        if (!books.length) {
            return null;
        }
        return [...books].sort((a, b) => a.year - b.year)[0];
    }
}
        const book1 = new Book("Self Power", "Deepak Chopra", 2013);
        const book2 = new Book("Outliers", "Malcolm Gladwell", 2009);
        const book3 = new Book("Good Habits, Bad Habits", "Wendy Wood", 2019);

        book1.printInfo();
        console.log("---------------------------");
        book2.printInfo();
        console.log("---------------------------");
        book3.printInfo();