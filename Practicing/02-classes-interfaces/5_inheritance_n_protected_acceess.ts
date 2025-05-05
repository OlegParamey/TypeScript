// Create a class `Employee` that extends `Person` (from task 3).
// Add a public field `jobTitle`.
// Create a method `introduce()` that logs the job title and full name.
// Use `protected` for the name fields so the subclass can access them.

class Person {
	protected _firstName: string;
	protected _lastName: string;

	set firstName(name: string) {
		if (name.trim() === '') {
			throw new Error('Invalid first name.');
		}
		this._firstName = name;
	}
	set lsstName(name: string) {
		if (name.trim() === '') {
			throw new Error('Invalid last name.');
		}
		this._lastName = name;
	}

	get fullName(): string {
		return `${this._firstName} ${this._lastName}.`;
	}
}

class Employee extends Person {
	constructor(public jobTitle: string) {
		super();
	}

	introduce() {
		console.log(`${this.jobTitle} ${this.fullName}.`);
	}
}
