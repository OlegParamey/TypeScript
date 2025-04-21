function generateError(msg?: string) {
	throw new Error(msg);
}

generateError("asdda");

type User = {
	name: string;
	age: number;
	role?: "admin" | "guest"; // optional property
};

const user: User = {
	name: "John",
	age: 30,
};

let input = "";

const didProvideInput = input ?? false;
