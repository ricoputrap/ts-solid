"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
const BookSaving_1 = __importDefault(require("./BookSaving"));
function default_1() {
    const book = new Book_1.default("Coding", "Rico", "Belajar coding", 10);
    BookSaving_1.default.saveBook(book); // will print the object `book`;
}
exports.default = default_1;
