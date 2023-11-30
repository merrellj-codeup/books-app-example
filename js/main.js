import { getBookAndAuthor } from "./api/books-api.js";

// MAIN
(async () => {
	const mybook = await getBookAndAuthor(2);
	console.log(mybook);
})();
