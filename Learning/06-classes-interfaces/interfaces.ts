interface Authenticable {
	email: string;
	password: string;

	login(): void;
	logout(): void;
}

interface AuthenticableAdmin extends Authenticable {
	role: "admin" | "superadmin";
}

class AuthenticableUSer implements Authenticable {
	constructor(public userName: string, public email: string, public password: string) {}

	login() {
		// ...
	}

	logout() {
		// ...
	}
}

// ...

function authenticate(user: Authenticable) {
	user.login();

	// console.log(user.role);
	// Property 'role' does not exist on type 'Authenticable' but exists in 'AuthenticableAdmin'.
}

// interface Authenticable {
// 	role: string;
// }

let user: Authenticable;

user = {
	email: "text@example.com",
	password: "abc1",
	login() {
		// reach out tot a database, check credentials, create session ...
	},
	logout() {
		// clear the session
	},
};

type SumFn = (a: number, b: number) => number;
// interface SumFn {
// 	(a: number, b: number): number;
// }

let sum: SumFn;

sum = (a, b) => a + b;
