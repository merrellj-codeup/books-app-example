import BookList from "./BookList.js";
import BooksAPI from "./api/books-api-class.js";
const booksAPI = new BooksAPI();

// MAIN
(async () => {
	const books = await booksAPI.getBooksAndAuthors();
	const booksContainer = document.querySelector(".books-container");
	const bookList = new BookList(books, booksContainer);
	console.log(bookList);
})();
