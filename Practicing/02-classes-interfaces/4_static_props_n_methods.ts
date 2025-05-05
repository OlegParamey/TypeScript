// Add a static property `planet` and static method `sayHello()` to a class `Alien`.
// Make the method print a message like "Greetings from Mars".

class Alien {
	static planet = 'Mars';
	static sayHello(): void {
		console.log(`Greetings from ${this.planet}`);
	}
}
