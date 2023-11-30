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
