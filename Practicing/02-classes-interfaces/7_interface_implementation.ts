// Create an interface `Authenticable` with:

// -   `email`, `password`
// -   Methods `login()` and `logout()`
//     Then create a class `AdminUser` that implements it.

interface Authenticable {
	email: string;
	password: string;

	login: () => void;
	logout: () => void;
}

class AdminUser implements Authenticable {
	constructor(public email: string, public password: string) {}

	login() {
		// ...
	}
	logout() {
		// ...
	}
}
