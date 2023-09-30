import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

const book1 = new Book("Self Power", "Deepak Chopra",2013 );
const book2 = new Book("Outliers", "Malcolm Gladwell", 2009);
const book3 = new Book("Good Habits, Bad Habits", "Wendy Wood", 2019);

console.log("---------------------------");

book1.name = "NewName";
book2.author = 400;
book3.year = 'string';

console.log("---------------------------");

book1.printInfo();
console.log("---------------------------");
book2.printInfo();
console.log("---------------------------");
book3.printInfo();

const ebook1 = new EBook ("Self Power", "Deepak Chopra",2013, "fb2");
const ebook2 = new EBook("Outliers", "Malcolm Gladwell", 2009, "epub");
const ebook3 = new EBook("Good Habits, Bad Habits", "Wendy Wood", 2019, "mobi");

console.log("---------------------------");

ebook1.name = 993;
ebook1.author = 993;
ebook1.year = 2007;
ebook1.fileFormat = 3;

ebook1.printInfo();
console.log("---------------------------");
ebook2.printInfo();
console.log("---------------------------");
ebook3.printInfo();
console.log("---------------------------");

static findOldestBook(books) {
    if (!books.length) {
        return null;
    }
    return [...books].sort((a, b) => a.year - b.year)[0];
}
const book1 = new Book("Self Power", "Deepak Chopra", 2013);

const oldestBook = Book.findOldestBook([book1, book2, book3, ebook1]);
console.log('Oldest book:');
oldestBook.printInfo();
