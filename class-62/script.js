// Common Types of Errors in JavaScript

// 1. Syntax Errors

// console.log("Hello"  

// 2. Runtime Errors

// let user;
// console.log(user.name); 

// 3. Logical Errors

// console.log(2 + 2 * 2); // Thinking output = 8, but actual = 6


//  Understanding the Error Object

// try {
//    throw new Error("Something went wrong!");
// } catch (err) {
//    console.log(err.name);    // Error
//    console.log(err.message); // Something went wrong!
//    console.log(err.stack);   // Stack trace
// }

// 1. basic try...catch

// try {
//    let x = y + 5;  // y is not defined
// } catch (err) {
//    console.log("Error occurred");
// }

// 2. detailed catch

// try {
//     JSON.parse("{Invalid JSON string}");
// } catch (err) {
//     console.log("Error occurred:",err.name);
//     console.log("Message:",err.message);
// }   

// 3. finally block

// try {
//    console.log("Trying...");
// } catch (err) {
//    console.log("Error happened!");
// } finally {
//    console.log("This ALWAYS runs");
// }

// Throwing Errors

// 1. Throwing a simple error

// throw new Error("Invalid input!");

// 2. Throwing custom error types

// class MyCustomError extends Error {
//    constructor(msg) {
//       super(msg);
//       this.name = "MyCustomError";
//    }
// }

// throw new MyCustomError("Custom error occurred!");
