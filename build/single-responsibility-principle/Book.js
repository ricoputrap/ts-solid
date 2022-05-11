"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author, desc, pages) {
        this.title = title;
        this.author = author;
        this.description = desc;
        this.pages = pages;
    }
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(authorName) {
        this.author = authorName;
    }
    getDescription() {
        return this.description;
    }
    setDescription(desc) {
        this.description = desc;
    }
    getPages() {
        return this.pages;
    }
    setPages(pageNum) {
        this.pages = pageNum;
    }
}
exports.default = Book;
