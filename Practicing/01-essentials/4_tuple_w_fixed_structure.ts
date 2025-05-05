// Create a variable `position` that is a tuple of exactly two numbers: `[number, number]`.
// Assign `[10, 20]` to it.
// Then try assigning `[10, 20, 30]` and explain what TypeScript says.

let position: [number, number];

position = [10, 20];
// position = [10, 20, 30];
// Type '[number, number, number]' is not assignable to type '[number, number]'.
//   Source has 3 element(s) but target allows only 2.
