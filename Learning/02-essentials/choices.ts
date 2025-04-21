// enum Role {
// 	Admin,
// 	Editor,
// 	Guest,
// 	User,
// }

type Role = "admin" | "editor" | "guest" | "user";
type User = {
	name: string;
	age: number;
	role: Role;
	permissions: string[];
};

let userRole: Role;

///...

userRole = "guest"; // 1 => Editor

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]
possibleResults = [1, -1];

function access(role: Role) {
	///...
}
