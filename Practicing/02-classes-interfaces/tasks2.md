## TypeScript Practice Exercises (Set 2 – Classes, Interfaces, Accessors, Abstract Classes)

### 🟢 1. Class with Constructor (Easy)

Create a class `Animal` with two properties: `name: string` and `age: number`.
Initialize these properties via the constructor.

---

### 🟢 2. Public, Private, and Readonly Properties (Easy)

Create a class `Book` with the following:

-   A public `title: string`
-   A private `author: string`
-   A readonly array `genres: string[]`
    Add a method `describe()` that logs the title and author.

---

### 🟡 3. Getters and Setters (Medium)

Create a class `Person` with private `_firstName` and `_lastName` fields.
Use setters to validate that names are not empty strings.
Add a getter `fullName` that returns the full name.

---

### 🟡 4. Static Properties and Methods (Medium)

Add a static property `planet` and static method `sayHello()` to a class `Alien`.
Make the method print a message like "Greetings from Mars".

---

### 🟡 5. Inheritance and Protected Access (Medium)

Create a class `Employee` that extends `Person` (from task 3).
Add a public field `jobTitle`.
Create a method `introduce()` that logs the job title and full name.
Use `protected` for the name fields so the subclass can access them.

---

### 🟠 6. Abstract Classes (Above Medium)

Create an abstract class `Component` with a constructor that accepts `id: string` and a method `render()`.
Then create a subclass `Button` that implements `render()`.

---

### 🟠 7. Interface Implementation (Above Medium)

Create an interface `Authenticable` with:

-   `email`, `password`
-   Methods `login()` and `logout()`
    Then create a class `AdminUser` that implements it.

---

### 🔴 8. Interface Inheritance (Hard)

Extend `Authenticable` into a new interface `PrivilegedAuthenticable` that adds a `role: 'admin' | 'superadmin'`.
Then implement it in a class `SuperAdmin`.

---

### 🔴 9. Function Interface Type (Hard)

Define a type `Calculator = (a: number, b: number) => number`.
Create a variable of that type and assign a function that multiplies two numbers.

---

### 🔴 10. Runtime Type Check for Interface (Hard)

Write a function `authenticate(user: Authenticable)` that calls `login()` and `logout()`.
Pass it a valid object. Then attempt to access `user.role` and handle the TypeScript error using type narrowing.

---
