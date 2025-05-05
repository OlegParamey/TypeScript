// Define a type `Calculator = (a: number, b: number) => number`.
// Create a variable of that type and assign a function that multiplies two numbers.

type Calculator = (a: number, b: number) => number;
const mult: Calculator = (a, b) => a * b;
