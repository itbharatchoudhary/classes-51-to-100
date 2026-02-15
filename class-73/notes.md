## What is `useState`?

In React, `useState` is a Hook.
A Hook is a special function that allows a React component to remember data and change it over time.


## Why Do We Need `useState`?

A normal JavaScript variable cannot update the UI when its value changes.

Example (wrong way):

```js
let count = 0;
count = count + 1;
```

- The value changes, but the screen does NOT update.

React needs a special way to:

1. Store data
2. Update data
3. Re-render the UI automatically

That special way is `useState`.

## Importing `useState`

Before using `useState`, we must import it from React.

```jsx
import { useState } from "react";
```

##  Basic Syntax of `useState`

```jsx
const [stateVariable, setStateFunction] = useState(initialValue);
```

Let us understand each part carefully.


### 1. `stateVariable`

* This is the current value of the state
* It is read-only
* Example: `count`, `name`, `tasks`


### 2. `setStateFunction`

* This is a function
* It is used to update the state
* Example: `setCount`, `setName`, `setTasks`


### 3. `initialValue`

* This is the starting value
* It runs only once when the component loads
* Can be:

  * Number → `0`
  * String → `""`
  * Boolean → `true / false`
  * Array → `[]`
  * Object → `{}`



### First Simple Example (Counter)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
```

-> How This Works

1. `useState(0)` sets count = 0
2. React shows Count: 0
3. Button is clicked
4. `setCount(count + 1)` runs
5. React updates `count`
6. React re-renders** the component
7. Screen updates automatically



### Important Rule of `useState`

Never update state directly

 Wrong:

```jsx
count = count + 1;
```

 Correct:

```jsx
setCount(count + 1);
```



### `useState` with String

```jsx
const [name, setName] = useState("Bharat");

<p>{name}</p>
<button onClick={() => setName("Rahul")}>
  Change Name
</button>
```

-> Clicking the button changes the text on screen.



### `useState` with Boolean

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);

<button onClick={() => setIsLoggedIn(true)}>
  Login
</button>

{isLoggedIn && <p>Welcome!</p>}
```

-> Used for show / hide UI

### `useState` with Array

```jsx
const [tasks, setTasks] = useState([]);

setTasks([...tasks, "Learn React"]);
```

* `...tasks` copies old data
* New data is added safely
* React re-renders UI

### `useState` with Object

```jsx
const [user, setUser] = useState({
  name: "Bharat",
  age: 22,
});

setUser({ ...user, age: 23 });
```

-> Always copy the old object before updating.

### When Does React Re-render?

React re-renders when:

* `setStateFunction()` is called
* State value changes

React does **NOT** re-render when:

* Normal variables change


### Real-Life Analogy

Think of `useState` like a remote control

* State = TV channel
* `setState` = Remote button
* Press button → Channel changes → Screen updates
###