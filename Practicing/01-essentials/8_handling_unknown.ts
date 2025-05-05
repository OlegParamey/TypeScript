// Write a function `handle(input: unknown)` that:

// -   Logs the string’s length if it’s a string
// -   Logs the square if it’s a number
// -   Otherwise, logs `"Unsupported type"`

function handle(input: unknown): void {
	if (typeof input === 'string') {
		console.log(input.length);
	} else if (typeof input === 'number') {
		console.log(Math.pow(input, 2));
	} else {
		console.log('Unsupported type');
	}
}
