import BooksAPI from "./api/books-api-class.js";

class Book {
	constructor(book, target, booksAPI, bookList) {
		this.ISBN = book.ISBN;
		this.authorId = book.authorId;
		this.genre = book.genre;
		this.publishedYear = book.publishedYear;
		this.summary = book.summary;
		this.title = book.title;
		this.element = this.render(target);
		this.bookList = bookList;
		this.booksAPI = booksAPI;
	}
	render(target) {
		const card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `
            <h2>${this.title}</h2>
            <h3>${this.authorId}</h3>
            <p>${this.summary}</p>
        `;
		/////////////
		target.appendChild(card);
		return card;
	}
	async remove() {
		await this.booksAPI.deleteBook(this.id);
		this.element.remove();
	}
	async edit(book) {
		const changes = {
			...book,
		};
		try {
			const updatedBook = await this.booksAPI.patchBook(changes);
			this.element.querySelector("h2").textContent = updatedBook.title;
			this.element.querySelector("h3").textContent = updatedBook.authorId;
			this.element.querySelector("p").textContent = updatedBook.summary;
		} catch (error) {
			console.log(error);
		}
	}
}

export default Book;
