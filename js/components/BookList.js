import Book from "./Book.js";
import BooksAPI from "../api/books-api-class.js";

class BookList {
	constructor(books, target) {
		this.element = this.render(target);
		this.booksAPI = new BooksAPI();
		this.books = books.map((book) => {
			return new Book(book, this.element, this.booksAPI, this);
		});
	}
	render(target) {
		const bookList = document.createElement("div");
		bookList.classList.add("book-list");
		target.appendChild(bookList);
		return bookList;
	}
	update(genre, search) {
		let filteredBooks = this.books;
		if (genre) {
			filteredBooks = filteredBooks.filter((book) => {
				return book.genre === genre;
			});
		}
		if (search) {
			filteredBooks = filteredBooks.filter((book) => {
				return book.title.toLowerCase().includes(search.toLowerCase());
			});
		}
		this.element.innerHTML = ``;
		filteredBooks.forEach((book) => {
			this.element.appendChild(book.element);
		});
	}
}

export default BookList;
