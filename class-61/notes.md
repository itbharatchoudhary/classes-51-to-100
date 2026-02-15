
JavaScript is a single-threaded language, which means it can do only one task at a time.
However, many operations—like network requests, timers, or file loading—take time.
To prevent the program from “freezing” while these tasks complete, JavaScript uses asynchronous programming.

The following concepts form the backbone of asynchronous JavaScript:

1. Promises : A Promise is an object that represents the eventual result of an asynchronous operation.

“Yeh kaam jaakar karo, jab ho jaaye toh bata dena.”

Every Promise has three states:

1.Pending — The task has started but is not yet finished.
2.Fulfilled (Resolved) — The task completed successfully.
3.Rejected — The task failed.

Promises help us manage asynchronous tasks without falling into “callback hell.”

---

2. async / await : The `async` and `await` keywords provide a cleaner way to work with Promises.

* A function marked with `async` automatically returns a Promise.
* The `await` keyword pauses the function until the Promise is resolved or rejected.

This makes asynchronous code look like synchronous code and greatly improves readability.

---

3. setTimeout and setInterval

These are timer functions provided by the browser :

1.setTimeout : Executes a function once after a specified delay.Useful when you need to run something after some time passes.

2.setInterval : Executes a function repeatedly after a fixed interval.Useful for tasks that must run continuously (e.g., updates, counters, clocks).

---

4. Fetch API : `fetch()` is a modern way to request data from any URL or API.

What fetch does

* It sends a request to a given URL.
* It returns a Promise representing the network operation.

Why fetch data is not readable directly

The raw response from `fetch()` is a ReadableStream.
It is not human-readable or directly usable.
To convert the stream into usable data, we call:

response.json()


This method:

* converts the data into JSON
* returns another Promise
* provides us with the final, readable JavaScript object

