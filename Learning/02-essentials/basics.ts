let userName: string;
let useAge = 38;

// ...

userName = "OLEG";

function add(a: number, b = 5) {
	return a + b;
}
add(2, 3);
add(2);
