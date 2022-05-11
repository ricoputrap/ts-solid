import Book from "./Book";

class BookSaving {
  public static saveBook(book: Book): void {
    console.log("save this book:", book);
  }
}

export default BookSaving;