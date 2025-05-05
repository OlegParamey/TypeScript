// Write a function `authenticate(user: Authenticable)`
// that calls `login()` and `logout()`.
// Pass it a valid object. Then attempt to access
// `user.role` and handle the TypeScript error using type narrowing.

interface Authenticable {
	email: string;
	password: string;

	login: () => void;
	logout: () => void;
}

interface AuthenticableAdmin extends Authenticable {
	role: 'admin' | 'superadmin';
}

function authenticate(user: Authenticable) {
	user.login();
	if ('role' in user) {
		const adminUser = user as AuthenticableAdmin;
		console.log(`User role is: ${adminUser.role}`);
	} else {
		console.log('No role available for this user.');
	}

	user.logout();
}

let user: Authenticable;

user = {
	email: 'text@example.com',
	password: 'abc1',
	login() {
		console.log('login action');
	},
	logout() {
		console.log('logout action');
	},
};

authenticate(user);
