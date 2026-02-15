// 3. Destructuring, Spread Operator, and Rest Operator

// 3.1 Array Destructuring -> Array destructuring allows you to **unpack values from an array into separate variables**.

// Example

const numbers = [10, 20, 30];

const [z, b, c] = numbers;

console.log(z); // 10
console.log(b); // 20
console.log(c); // 30



// Skipping Values
// Example


const arr = [1, 2, 3, 4];

const [x, , y] = arr;

console.log(x); // 1
console.log(y); // 3



// Default Values
// Example


const [p = 5, q = 10] = [7];
console.log(p); // 7
console.log(q); // 10



// 3.2 Object Destructuring -> Object destructuring allows you to extract properties from an object into variables.

// Example


const person = {
  name: "Bharat",
  age: 20,
};

const { name, age } = person;

console.log(name); // Bharat
console.log(age); // 20


// Rename Variables
// Example


const { name: fullName, age: years } = person;

console.log(fullName); // Bharat
console.log(years);    // 20


// Default Values
// Example

const { city = "Unknown" } = person;

console.log(city); // Unknown




// 3.3 Spread Operator (`...`) -> The spread operator expands an array or object into individual elements.

// Spread in Arrays
// Example


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]


// Spread in Objects
// Example


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }

//  Copy Arrays / Objects


const copyArray = [...arr1];
const copyObject = { ...obj1 };


// 3.4 Rest Operator (`...`) -> The rest operator collects remaining values into a single array or object.

// Rest in Arrays
// Example


const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // 10
console.log(rest);  // [20, 30, 40]


//  Rest in Objects
// Example


const { a, ...others } = { a: 1, b: 2, c: 3 };

console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }



// Rest in Function
// Example

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // 6


//  Basics of ES Modules
// - ES Modules are the standardized way of structuring JavaScript code.
// - You enable them in HTML by using:

//   <script type="module" src="main.js"></script>

// - This allows you to use `import` and `export` keywords directly.


//  Named Export
// - You can export multiple values from a file.
// - Importing requires exact names (with curly braces).

// Example:

// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { add, multiply } from './math.js';

console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6


// Default Export
// - Each file can have only one default export.
// - Importing doesn’t require curly braces, and you can rename it freely.

// Example:

// logger.js
export default function log(message) {
  console.log("LOG:", message);
}

// main.js
import log from './logger.js';

log("Hello World");  // LOG: Hello World



//  Mixed Export (Named + Default) - You can combine both in one file.

// Example:

// utils.js
export default function greet(name) {
  return `Hello, ${name}`;
}
export const PI = 3.14159;
export const square = x => x * x;

// main.js
import greet, { PI, square } from './utils.js';

console.log(greet("Bharat"));   // Hello, Bharat!
console.log(PI);                // 3.14159
console.log(square(4));         // 16


//  Import Everything (`import * as`)
// - Useful when you want all exports under one namespace.

// Example:


// constants.js
export const RED = "#FF0000";
export const BLUE = "#0000FF";

// main.js
import * as colors from './constants.js';

console.log(colors.RED);   // #FF0000
console.log(colors.BLUE);  // #0000FF

