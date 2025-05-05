// Create an abstract class `Component` with a
// constructor that accepts `id: string` and a method `render()`.
// Then create a subclass `Button` that implements `render()`.

abstract class Component {
	constructor(public id: string) {}

	abstract render(): void;
}

class Button extends Component {
	constructor(id: string, public label: string) {
		super(id);
	}

	render(): void {
		console.log(`Rendering button [${this.label}] with id ${this.id}`);
	}
}

// Example usage:
const myButton = new Button('btn-1', 'Submit');
myButton.render();
