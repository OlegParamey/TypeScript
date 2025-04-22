"use strict";
const hobbies = ["Sports", "Cooking"];
const person = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curRes, curVal) => {
        return curRes + curVal;
    }, 0);
};
const addedNumbers = add(1, 2, 4);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName, age } = person;
//# sourceMappingURL=app.js.map