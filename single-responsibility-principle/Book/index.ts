import Book from "./Book";
import BookSaving from "./BookSaving";

export default function () {
  const book = new Book("Coding", "Rico", "Belajar coding", 10);
  BookSaving.saveBook(book); // will print the object `book`;
}