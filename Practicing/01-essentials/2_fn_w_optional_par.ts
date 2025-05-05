// Create a function `greet(name?: string): string` that returns:

// -   `"Hello, <name>!"` if `name` is provided
// -   `"Hello, stranger!"` if it’s not

function greet(name?: string): string {
	return name ? `Hello, ${name}!` : 'Hello, stranger!';
}
