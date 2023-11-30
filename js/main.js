import BooksAPI from "./api/books-api-class.js";
const booksAPI = new BooksAPI();

// MAIN
(async () => {
	const books = await booksAPI.getBooksAndAuthors();
	console.log(books);
})();
