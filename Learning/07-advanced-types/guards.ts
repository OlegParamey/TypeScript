type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
	type: "file",
	path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
	type: "db",
	connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
	return source.type === "file";
}

function loadData(source: Source) {
	if (isFile(source)) {
		// source.path;
		// source.path; => use that to open the file
		return;
	}
	// source.connectionUrl; => to reach out to database
}

class User {
	constructor(public name: string) {}

	join() {
		// ...
	}
}

class Admin {
	constructor(permissions: string[]) {}

	scan() {
		// ...
	}
}

const user = new User("Oleg");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
	// .join() OR .scan() ...
	if (entity instanceof User) {
		entity.join();
		return;
	}

	entity.scan();
}
