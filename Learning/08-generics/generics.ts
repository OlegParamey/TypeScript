let names: Array<string> = ["Oleg", "Dima"];

type DataStore<T> = {
	[key: string]: T;
};

let store: DataStore<boolean | string> = {};
store.name = "Oleg";
store.isInstructor = true;

let nameStore: DataStore<string> = {};
nameStore.name = "Max";
// nameStore.age = 12; Type 'number' is not assignable to type 'string'.

function merge<T, U>(a: T, b: U) {
	return [a, b];
}
// In this merge(),
// T becomes number because of parameter a
// U becomes boolean because of parameter b
const ids = merge(1, true);

function mergeObj<T extends object, U extends object>(a: T, b: U) {
	return { ...a, ...b };
}

const merged = mergeObj({ userName: "Oleg" }, { age: 22 });

class User<T> {
	constructor(public id: T) {}
}

const user = new User("21s");
user.id;
