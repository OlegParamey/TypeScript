let hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = ["Max", 21];
// users = ["Manu", "Anna", false];

let possibleResults: [number, number]; // [1, -1]
possibleResults = [1, -1];
// possibleResults = [5, 12, 10];

let user: {
	name: string;
	age: number | string;
	hobbies: string[];
	role: { description: string; id: number };
} = {
	name: "Max",
	age: 30,
	hobbies: ["Sports", "Cooking"],
	role: { description: "admin", id: 5 },
};

let val: {} = "some text"; // {} in TypeScript means any value except null or undefined

let data: Record<string, string | number>;
data = {
	entry1: "Max",
	entry2: 32,
};
