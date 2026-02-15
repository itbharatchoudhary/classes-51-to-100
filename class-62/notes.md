Day 62 – Error Handling

1. Introduction to Error Handling -> Error handling allows JavaScript applications to detect, manage, and recover from unexpected issues during execution.

* Why it's important:
- Prevents app crashes
- Helps debug issues faster
- Ensures smooth user experience
- Makes code more predictable and stable

* Basic flow:

1.Code executes
2.If an error occurs, control jumps to the nearest `catch` block

* Common Types of Errors in JavaScript

1.Syntax Error -> These occur before code executes due to invalid JavaScript syntax.( aapne code mein likhte waqt galti kardi ,format mein galti)
2.Runtime Errors -> Errors occurring while the code is running. (code likhte waqt error nahi hai chalte waqt error hai )
3.Logical Errors -> Code runs without crashing but produces incorrect output. (aapke code ko kuchh karna chahiye tha par wo kar kuchh aur raha hai)

* Understanding the Error Object - The JavaScript `Error` object contains metadata about the failure.

Properties:
- `message` – description of the error
- `name` – error type: `ReferenceError`, `TypeError`, `SyntaxError`, etc.
- `stack` – stack trace (where the error occurred)

* Handling Exceptions: try-catch and try-catch-finally

1.Basic try-catch
2.Detailed catch
3.Using finally - `finally` executes whether an error occurs or not.


* How to Throw Errors in JavaScript -> You can create custom errors using `throw`.

1.Throwing a simple error
2.Throwing custom error types
