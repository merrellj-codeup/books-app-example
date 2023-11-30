/**
 * Gets all books from the JSON-server API
 * @returns {Promise<Array>} Promise that resolves to an array of books
 */
export const getBooks = async () => {
	const url = "http://localhost:3000/books";
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 *  Gets a book from the JSON-server API
 * @param {number} id - The id of the book to get
 * @returns {Promise<Object>} Promise that resolves to a book object
 */
export const getBook = async (id) => {
	const url = `http://localhost:3000/books/${id}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 * Deletes a book from the JSON-server API
 * @param {number} id - The id of the book to delete
 * @returns {Promise<Object>} Promise that resolves to the deleted book object
 */
export const deleteBook = async (id) => {
	const url = `http://localhost:3000/books/${id}`;
	const options = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 * Posts a new book to the JSON-server API
 * @param {Object} book - The book object to post
 * @param {string} book.ISBN - The ISBN of the book
 * @param {number} book.authorId - The id of the author of the book
 * @param {string} book.genre - The genre of the book
 * @param {number} book.publishedYear - The year the book was published
 * @param {string} book.summary - The summary of the book
 * @param {string} book.title - The title of the book
 * @returns {Promise<Object>} Promise that resolves to the posted book object
 */
export const postBook = async ({ ISBN, authorId, genre, publishedYear, summary, title }) => {
	const newBook = {
		ISBN,
		authorId,
		genre,
		publishedYear,
		summary,
		title,
	};
	const body = JSON.stringify(newBook);

	const url = `http://localhost:3000/books`;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: body,
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 * Patches a book in the JSON-server API
 * @param {Object} book - The book object to patch
 * @param {number} book.id - The id of the book to patch
 * @param {string} book.ISBN - The ISBN of the book
 * @param {number} book.authorId - The id of the author of the book
 * @param {string} book.genre - The genre of the book
 * @param {number} book.publishedYear - The year the book was published
 * @param {string} book.summary - The summary of the book
 * @param {string} book.title - The title of the book
 * @returns {Promise<Object>} Promise that resolves to the patched book object
 */
export const patchBook = async (book) => {
	const newBook = {
		...book,
	};
	const body = JSON.stringify(newBook);

	const url = `http://localhost:3000/books/${book.id}`;
	const options = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: body,
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 * Gets all authors from the JSON-server API
 * @returns {Promise<Array>} Promise that resolves to an array of authors
 */
export const getAuthors = async () => {
	const url = "http://localhost:3000/authors";
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 * Gets an author from the JSON-server API
 * @param {number} id - The id of the author to get
 * @returns {Promise<Object>} Promise that resolves to an author object
 */
export const getAuthor = async (id) => {
	const url = `http://localhost:3000/authors/${id}`;
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

/**
 * Deletes an author from the JSON-server API
 * @param {number} id - The id of the author to delete
 * @returns {Promise<Object>} Promise that resolves to the deleted author object
 */
export const deleteAuthor = async (id) => {
	const url = `http://localhost:3000/authors/${id}`;
	const options = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

export const postAuthor = async ({ name, birthYear, deathYear, nationality }) => {
	const newAuthor = {
		name,
		birthYear,
		deathYear,
		nationality,
	};
	const body = JSON.stringify(newAuthor);

	const url = `http://localhost:3000/authors`;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: body,
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

export const patchAuthor = async (author) => {
	const newAuthor = {
		...author,
	};
	const body = JSON.stringify(newAuthor);

	const url = `http://localhost:3000/authors/${author.id}`;
	const options = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: body,
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};

export const getBooksAndAuthors = async () => {
	const books = await getBooks();
	const booksAndAuthors = books.map(async (book) => {
		const author = await getAuthor(book.authorId);
		return {
			...book,
			author,
		};
	});
	return booksAndAuthors;
};

export const getBookAndAuthor = async (id) => {
	const book = await getBook(id);
	const author = await getAuthor(book.authorId);
	return {
		...book,
		author,
	};
};
