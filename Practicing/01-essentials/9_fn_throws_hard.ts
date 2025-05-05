// Create a function `crash(message: string): never` that always throws an error with the given message.

function crash(message: string): never {
	throw new Error(message);
}
