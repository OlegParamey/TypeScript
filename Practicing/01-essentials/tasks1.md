# All tasks were created by AI

## TypeScript Practice Exercises (Set 1)

### 🟢 1. Basic Typing (Easy)

Declare a variable `city` of type `string` and assign it the value `"Moscow"`.
Then declare a variable `population` that can be either a `number` or a `string`, and assign it the value `12_000_000`.

---

### 🟢 2. Function with Optional Parameter (Easy)

Create a function `greet(name?: string): string` that returns:

-   `"Hello, <name>!"` if `name` is provided
-   `"Hello, stranger!"` if it’s not

---

### 🟡 3. Array with Union Type (Medium)

Create an array `items` that can hold both `string` and `number` values.
Add at least 3 elements of different types.

---

### 🟡 4. Tuple with Fixed Structure (Medium)

Create a variable `position` that is a tuple of exactly two numbers: `[number, number]`.
Assign `[10, 20]` to it.
Then try assigning `[10, 20, 30]` and explain what TypeScript says.

---

### 🟡 5. Object with Nested Properties (Medium)

Define a type `Product`:

```ts
type Product = {
	id: number;
	title: string;
	tags: string[];
	category: { name: string; id: number };
};
```

Then create a variable `product` of this type and assign it a value.

---

### 🟠 6. Typing with `Record` (Above Medium)

Create an object `translations` where the key is a language code (`'en'`, `'ru'`, `'de'`) and the value is a greeting string.
Use the `Record` utility type to type this object.

---

### 🟠 7. Literal Types and Custom Type Alias (Above Medium)

Define a type:

```ts
type Permission = 'read' | 'write' | 'delete';
```

Then create a variable `userPermission` of this type.
Try assigning `'execute'` to it and observe the error.

---

### 🔴 8. Handling `unknown` (Hard)

Write a function `handle(input: unknown)` that:

-   Logs the string’s length if it’s a string
-   Logs the square if it’s a number
-   Otherwise, logs `"Unsupported type"`

---

### 🔴 9. Function That Always Throws (Hard)

Create a function `crash(message: string): never` that always throws an error with the given message.

---

### 🔴 10. Optional Property and Access Function (Hard)

Define:

```ts
type User = {
	name: string;
	age: number;
	role?: 'admin' | 'guest';
};
```

Then write a function `canAccessDashboard(user: User): boolean` that returns `true` only if `user.role` is `'admin'`.
