debouncing and throttling
## Day 64 — Notes

### 1. Debouncing

#### 1.1 What is Debouncing?

Debouncing ensures that a function executes only after a specified period of inactivity. If the event keeps firing repeatedly, the function is delayed until the event stops.

In simple terms: "Run the function only after the last event — wait until the user pauses."

#### 1.2 Benefits of Debouncing

- Reduces unnecessary function executions
- Prevents server overload in API-based features
- Improves UI responsiveness
- Saves computational cost in high-frequency events

Notes:

- Delays execution until the event stops.
- Ideal for: search inputs, form validation, filter components.
- Reduces unnecessary API calls.
- Perfect for operations that must run after user pauses.

### 2. Throttling

#### 2.1 What is Throttling?

Throttling ensures that a function executes at fixed time intervals, regardless of how frequently the event fires.
In simple terms: "Allow the function to run at most once every X milliseconds."

#### 2.2 Benefits of Throttling

- Ensures steady performance during continuous events
- Avoids performance bottlenecks
- Guarantees execution at predictable intervals
- Prevents UI lag during heavy operations

Notes:

- Limits execution to one call every X milliseconds.
- Ideal for: scroll, resize, drag events.
- Ensures steady performance under high-frequency events.
- Avoids blocking the main thread.

### 3. JSON.stringify()

#### 3.1 Definition

`JSON.stringify()` converts a JavaScript value/object into a JSON-formatted string.
In simple terms: "Convert a JavaScript object into a JSON string."

#### 3.2 Syntax

JSON.stringify(value, replacer, space);
value - Object or array to convert 
replacer (optional) - Function or array to filter keys 
space (optional) - Number of spaces for pretty formatting 

#### 3.3 Why We Use `JSON.stringify()`

Send data to an API - Most servers accept JSON text 
Store data in LocalStorage - LocalStorage stores only string values 
Convert object into readable format - Useful for debugging/logging 
Deep copy (limited use) - Quick cloning of simple objects 


### 4. JSON.parse()

#### 4.1 Definition

`JSON.parse()` converts a JSON string back into a JavaScript object.
In simple terms: "Convert a JSON string back to a JS object."

#### 4.2 Syntax

JSON.parse(text, reviver);
text - Valid JSON string 
reviver (optional) - Function to transform the parsed values 

#### 4.3 Why We Use `JSON.parse()`

Read API responses - Server returns JSON text 
Retrieve LocalStorage data - Stored string converted back to object 
Convert string to array or object - Useful in complex state handling 


### 5. `JSON.stringify()` vs `JSON.parse()`

| Feature    | JSON.stringify() | JSON.parse()            | 
|------------|------------------|-------------------------|    
| Converts   | JS → JSON string | JSON string → JS object |
| Input      | Object/Array     | String                  |
| Output     | String           | Object/Array            |
| Common Use | Save/send data   | Read/restore data       |

### 6. Common Real-World Use Cases

Storing objects in LocalStorage:


const data = { score: 100 };
localStorage.setItem("game", JSON.stringify(data));

// Retrieving:
const game = JSON.parse(localStorage.getItem("game"));
console.log(game.score);

Sending data to backend:

fetch("/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, title: "Hello" })
});