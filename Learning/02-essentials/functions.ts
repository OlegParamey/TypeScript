function add(a: number, b: number) {
	return a + b;
}

function log(message: string) {
	console.log(message);
}

function logAndThrow(errorMessage: string): never {
	console.log(errorMessage);
	throw new Error(errorMessage);
}

function performJob(cb: (msg: string) => void) {
	console.log("Performing job...");
	cb("");
}

performJob(log);

type User = {
	name: string;
	age: number;
	greet: () => string;
};

let user: User = {
	name: "John",
	age: 30,
	greet() {
		console.log("Hello!");
		return this.name;
	},
};

user.greet();
