// Create a class `Person` with private `_firstName` and `_lastName` fields.
// Use setters to validate that names are not empty strings.
// Add a getter `fullName` that returns the full name.

class Person {
	private _firstName: string;
	private _lastName: string;

	set firstName(name: string) {
		if (name.trim() === '') {
			throw new Error('Invalid first name.');
		}
		this._firstName = name;
	}
	set lsstName(name: string) {
		if (name.trim() === '') {
			throw new Error('Invalid first name.');
		}
		this._lastName = name;
	}

	get fullName(): string {
		return `${this._firstName} ${this._lastName}.`;
	}
}
