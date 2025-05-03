type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'age';
validKey = 'name';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
	const val = obj[key];
	if (val === undefined || val === null) {
		throw new Error('Accessing undefined or null value.');
	}
	return val;
}

const data = { id: 1, isStored: false, values: [1, 2, 4, 5] };
const isStored = getProp(data, 'isStored');

const user = { name: 'Oleg', age: 22 };

const val = getProp(user, 'age');
