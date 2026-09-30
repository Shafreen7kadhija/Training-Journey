# JavaScript

## Overview

JavaScript is a cross-platform, object-oriented scripting language used to make web pages interactive and dynamic. It provides core language features such as operators, control structures, statements, objects, arrays, and functions.

JavaScript can be used on the client side to interact with the browser and the Document Object Model (DOM), and it can also be used on the server side.

JavaScript is standardized as **ECMAScript**, which helps maintain consistency across different implementations.

---

## 1. Introduction to JavaScript

### Key Concepts

- JavaScript and Java are different programming languages.
- JavaScript was originally created to add programming capabilities to web pages.
- It is supported by modern web browsers.
- ECMAScript is the standard specification behind JavaScript.
- JavaScript can be executed directly in a browser's Developer Tools Console.
- JavaScript can also be tested using online playgrounds.

### Common Execution Environment

In a browser:

```text
Browser → Developer Tools → Console
```

JavaScript can also be included in an HTML page using:

```html
<script>
    console.log("Hello JavaScript");
</script>
```

---

## 2. JavaScript Values and Literals

A literal represents a fixed value directly written in a JavaScript program.

Common types of literals include:

- String literals
- Numeric literals
- Boolean literals
- Array literals
- Object literals
- Regular expression literals

Example:

```javascript
let name = "Shafreen";
let age = 21;
let isStudent = true;

let numbers = [10, 20, 30];

let student = {
    name: "Shafreen",
    age: 21
};
```

---

## 3. Variables

Variables are used to store values in a program.

JavaScript provides:

```javascript
var
let
const
```

### `let`

Used for variables whose values may change.

```javascript
let age = 20;
age = 21;
```

### `const`

Used when the variable should not be reassigned.

```javascript
const pi = 3.14;
```

### `var`

The older way of declaring variables.

```javascript
var name = "Shafreen";
```

Modern JavaScript generally prefers `let` and `const`.

---

## 4. Data Types

JavaScript supports different types of values.

### Primitive Types

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

### Non-Primitive / Reference Types

- Objects
- Arrays
- Functions

Example:

```javascript
let name = "Shafreen";
let age = 21;
let passed = true;
let value;
let data = null;
```

---

## 5. Operators

JavaScript provides operators for performing calculations and comparisons.

### Arithmetic Operators

```text
+
-
*
/
%
**
```

Example:

```javascript
let result = 10 + 5;
```

### Comparison Operators

```text
>
<
>=
<=
==
===
!=
!==
```

### Logical Operators

```text
&&
||
!
```

### Assignment Operators

```text
=
+=
-=
*=
/=
```

---

## 6. Control Structures

Control structures determine how program statements are executed.

### Conditional Statements

```javascript
if
else
else if
```

Example:

```javascript
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
```

### Switch

```javascript
switch (choice) {
    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    default:
        console.log("Invalid");
}
```

---

## 7. Loops

Loops are used to execute a block of code repeatedly.

### `for`

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### `while`

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

### `do...while`

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

---

## 8. Arrays

Arrays are used to store multiple values in a single variable.

```javascript
let numbers = [10, 20, 30, 40];
```

Common array operations include:

```javascript
push()
pop()
shift()
unshift()
slice()
splice()
```

Array iteration methods include:

```javascript
forEach()
map()
filter()
reduce()
```

Example:

```javascript
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);

console.log(doubled);
```

---

## 9. Objects

Objects store data using key-value pairs.

```javascript
let student = {
    name: "Shafreen",
    age: 21,
    course: "CSE"
};
```

Accessing properties:

```javascript
console.log(student.name);
console.log(student["course"]);
```

Objects are useful for representing real-world entities and structured application data.

---

## 10. Functions

Functions are reusable blocks of code that can accept inputs and return outputs.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

Functions help:

- Reuse code
- Organize programs
- Reduce duplication
- Accept parameters
- Return results

### Arrow Functions

Modern JavaScript also supports arrow functions.

```javascript
const add = (a, b) => {
    return a + b;
};
```

Short form:

```javascript
const add = (a, b) => a + b;
```

---

## 11. Regular Expressions and Validation

Regular expressions (Regex) are patterns used to search, match, and validate text.

They are commonly used for:

- Name validation
- Email validation
- Input validation
- Pattern matching

Example:

```javascript
let pattern = /^[A-Za-z]+$/;

console.log(pattern.test("Shafreen"));
```

Validation helps prevent invalid data from entering an application.

---

## 12. Error Handling

JavaScript provides mechanisms for handling errors without unexpectedly terminating the application.

Common keywords:

```text
try
catch
finally
throw
```

Example:

```javascript
try {
    let result = riskyOperation();
} catch (error) {
    console.log(error);
} finally {
    console.log("Execution completed");
}
```

Error handling is important when working with user input, external operations, and asynchronous tasks.

---

## 13. Asynchronous JavaScript

JavaScript supports asynchronous programming so that operations can continue without unnecessarily blocking the rest of the program.

### `setTimeout()`

Used to execute code after a specified delay.

```javascript
setTimeout(() => {
    console.log("Executed after delay");
}, 2000);
```

### Promises

A Promise represents the eventual completion or failure of an asynchronous operation.

A Promise can have three states:

```text
Pending
Fulfilled
Rejected
```

Example:

```javascript
let promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### Async / Await

`async` and `await` provide a cleaner way to work with Promises.

```javascript
async function getData() {
    let result = await promise;
    console.log(result);
}
```

---

## 14. Iterators

JavaScript supports iteration through the iterator protocol.

Important concepts include:

- `Symbol.iterator`
- `next()`
- `value`
- `done`

A custom iterator can be created using `Symbol.iterator`.

The `next()` method returns the next value in the sequence and indicates whether iteration is complete.

Example:

```javascript
let numbers = [10, 20, 30];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Iterators are useful when values need to be retrieved sequentially.

---

## 15. Program Flow and Real-World Problem Solving

JavaScript programs often combine multiple concepts to solve practical problems.

A real-world application may involve:

```text
Input
  ↓
Validation
  ↓
Object Creation
  ↓
Data Processing
  ↓
Asynchronous Operation
  ↓
Status Update
  ↓
Output
```

Understanding the flow of a program is important when debugging and explaining JavaScript applications.

---

## 16. Important JavaScript Concepts Covered

The training covered concepts including:

- JavaScript fundamentals
- ECMAScript
- Variables
- Data types
- Literals
- Operators
- Conditional statements
- Loops
- Arrays
- Objects
- Functions
- Arrow functions
- Regular expressions
- Input validation
- Error handling
- Promises
- `setTimeout()`
- Async/Await
- Iterators
- `Symbol.iterator`
- Program flow analysis
- Real-world JavaScript problem solving

---

## 17. Assignment Application

The JavaScript assignment applied several of these concepts together.

The assignment involved concepts such as:

- Functions
- Regular expressions
- Input validation
- Error handling
- Objects and arrays
- Unique ID generation
- Promises
- `setTimeout()`
- Async/Await
- Custom iterators
- Program flow analysis

The assignment also required explaining the purpose of important functions, validation logic, object structure, asynchronous behavior, iterator logic, and program output.

---

## 18. Learning Outcome

After completing the JavaScript training, the main goal is to understand how JavaScript can be used to:

- Write structured programs
- Work with data using arrays and objects
- Create reusable functions
- Validate user input
- Handle errors
- Perform asynchronous operations
- Work with Promises and Async/Await
- Use iterators
- Understand program execution flow
- Build interactive and practical web applications

---

## Summary

JavaScript provides the programming logic behind interactive web applications. The training covered the language fundamentals first and then moved toward more advanced concepts such as functions, validation, objects, asynchronous programming, Promises, Async/Await, and custom iterators.

These concepts form an important foundation for developing modern web applications using JavaScript.