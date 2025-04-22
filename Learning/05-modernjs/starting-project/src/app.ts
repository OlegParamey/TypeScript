// // Code goes here!
// const userName = "Oleg";

// let age = 22;

// age = 23;

// var result: number;

// // function add(a: number, b: number) {
// // 	result = a + b;
// // 	return result;
// // }

// // if (age > 20) {
// // 	let isOld = true;
// // }

// // console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = (output) => console.log(output);

// const button = document.querySelector("button");
// if (button) {
// 	button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(2));

const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(...hobbies);

const person = {
	firstName: "Max",
	age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: [number, number, number]) => {
	return numbers.reduce((curRes, curVal) => {
		return curRes + curVal;
	}, 0);
};

const addedNumbers = add(1, 2, 4);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName, age } = person;
