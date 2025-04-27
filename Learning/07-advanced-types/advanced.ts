type DataStore = {
	[prop: string]: boolean | number;
};

// let someObj: Record<string, number | boolean>; same as type DataStore

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
// store.name = 'Oleg'

let roles = ["admin", "guest", "editor"] as const;
// roles.push('asd');
const firstRole = roles[0];

const dataEntries = {
	entry1: 0.51,
	entry2: -1.2,
} satisfies Record<string, number>;

// ...

// dataEntries.entry3;
