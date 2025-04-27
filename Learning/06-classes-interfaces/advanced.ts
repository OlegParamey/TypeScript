class User {
	// constructor(private firstName: string, private lastName: string) {}
	protected _firstName: string = "";
	private _lastName: string = "";

	set firstName(name: string) {
		if (name.trim() === "") {
			throw new Error("Invalid first name.");
		}
		this._firstName = name;
	}

	set lastName(name: string) {
		if (name.trim() === "") {
			throw new Error("Invalid last name.");
		}
		this._lastName = name;
	}

	get fullName() {
		return this._firstName + " " + this._lastName;
	}

	static eid = "USER";

	static greet() {
		console.log("Hello!");
	}
}
console.log(User.eid);
User.greet();

const oleg = new User();

oleg.firstName = "Oleg";
oleg.lastName = "";

console.log(oleg.fullName);

class Employee extends User {
	constructor(public jobTitle: string) {
		super();
		// super.firstName = "Dan";
	}

	work() {
		// ...
		console.log(this._firstName);
	}
}

abstract class UIElement {
	constructor(public identifier: string) {}

	clone(targetLocation: string) {
		// logic to duplicate the UI element
	}
}

// let uiElement = new UIElement();

class SideDrawerElement extends UIElement {
	constructor(public identifier: string, public position: "left" | "right") {
		super(identifier);
	}
}
