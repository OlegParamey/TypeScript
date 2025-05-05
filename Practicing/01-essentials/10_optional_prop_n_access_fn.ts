// Define:
// type User = {
// 	name: string;
// 	age: number;
// 	role?: 'admin' | 'guest';
// };
// Then write a function `canAccessDashboard(user: User): boolean`
// that returns `true` only if `user.role` is `'admin'`.

type User = {
	name: string;
	age: number;
	role?: 'admin' | 'guest';
};

function canAccessDashboard(user: User): boolean {
	return user.role === 'admin';
}
