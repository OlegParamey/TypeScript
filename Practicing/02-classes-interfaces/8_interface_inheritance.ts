// Extend `Authenticable` into a new interface
// `PrivilegedAuthenticable` that adds a `role: 'admin' | 'superadmin'`.
// Then implement it in a class `SuperAdmin`.

interface Authenticable {
	email: string;
	password: string;

	login: () => void;
	logout: () => void;
}

interface PrivilegedAuthenticable extends Authenticable {
	role: 'admin' | 'superadmin';
}

class SuperAdmin implements PrivilegedAuthenticable {
	constructor(
		public email: string,
		public password: string,
		public role: 'admin' | 'superadmin'
	) {
		this.role = 'superadmin';
	}

	login() {
		// ...
	}
	logout() {
		// ...
	}
}
