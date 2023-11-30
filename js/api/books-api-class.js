class BooksAPI {
	constructor() {
		this.base = "http://localhost:3000";
	}
	async getBooks() {
		const url = `${this.base}/books/`;
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}
	async getBook(id) {
		const url = `${this.base}/books/${id}`;
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}
	async deleteBook(id) {
		const url = `${this.base}/books/${id}`;
		const options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}
	async postBook({ ISBN, authorId, genre, publishedYear, summary, title }) {
		const newBook = {
			ISBN,
			authorId,
			genre,
			publishedYear,
			summary,
			title,
		};
		const body = JSON.stringify(newBook);

		const url = `${this.base}/books`;
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
	}
	async patchBook(book) {
		const newBook = {
			...book,
		};
		const body = JSON.stringify(newBook);

		const url = `${this.base}/books/${book.id}`;
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
	}
	async getAuthors() {
		const url = "${this.base}/authors";
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}
	async getAuthor(id) {
		const url = `${this.base}/authors/${id}`;
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}
	async deleteAuthor(id) {
		const url = `${this.base}/authors/${id}`;
		const options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	}
	async postAuthor({ name, birthYear, deathYear, nationality }) {
		const newAuthor = {
			name,
			birthYear,
			deathYear,
			nationality,
		};
		const body = JSON.stringify(newAuthor);

		const url = `${this.base}/authors`;
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
	}
	async patchAuthor(author) {
		const newAuthor = {
			...author,
		};
		const body = JSON.stringify(newAuthor);

		const url = `${this.base}/authors/${author.id}`;
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
	}
	async getBooksAndAuthors() {
		const books = await this.getBooks();
		const booksAndAuthors = books.map(async (book) => {
			const author = await this.getAuthor(book.authorId);
			return {
				...book,
				author,
			};
		});
		return Promise.all(booksAndAuthors);
	}
	async getBookAndAuthor(id) {
		const book = await this.getBook(id);
		const author = await this.getAuthor(book.authorId);
		return {
			...book,
			author,
		};
	}
}

export default BooksAPI;
