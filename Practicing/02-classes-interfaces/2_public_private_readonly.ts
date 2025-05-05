// Create a class `Book` with the following:

// -   A public `title: string`
// -   A private `author: string`
// -   A readonly array `genres: string[]`
//     Add a method `describe()` that logs the title and author.

class Book {
	public title: string;
	private author: string;
	readonly genres: string[];
	describe() {
		console.log(this.title, this.author);
	}
}
