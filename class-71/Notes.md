# Upcoming task
## Design Inspirations for Next Task

1. https://in.pinterest.com/pin/29906785021400572/

2. https://in.pinterest.com/pin/1829656095048828/

3. https://in.pinterest.com/pin/2885187257698522/

4. https://in.pinterest.com/pin/88664686405701622/

5. https://in.pinterest.com/pin/211174978568067/


# React Props: Passing Data to Components

In React, props (short for properties) are a fundamental mechanism used to pass data from one component to another. They allow components to be configured and reused with different values while keeping the component logic unchanged.

Props are always passed from a parent component to a child component and are received by the child as an object.

### Example

```javascript
function Card(props) {
  return <h2>{props.title}</h2>;
}

<Card title="React Notes" />
```

In this example, the `title` value is passed from the parent and accessed inside the child component using `props.title`.

### Characteristics of Props

Props in React have the following properties:

* Immutable: A component cannot modify the props it receives.
* Unidirectional (Top-Down Flow)**: Data flows only from parent to child.
* Used for Configuration: Props define how a component behaves or appears.

This design ensures predictability and easier debugging.

## Rendering Array Data Using `map()`

In React applications, it is common to render a list of elements dynamically from an array. The JavaScript `map()` method is used for this purpose.

### Example

```javascript
const users = ["A", "B", "C"];

users.map(user => <li key={user}>{user}</li>);
```

The `map()` function iterates over each element of the array and transforms it into a React element.

### Important Notes

* `map()` does not modify the original array.
* Each rendered element must include a **key** to uniquely identify it.

## Eliminating Array Data Using `filter()`

The `filter()` method is used to remove unwanted elements from an array based on a condition.

### Example

```javascript
const filteredUsers = users.filter(user => user !== "B");

filteredUsers.map(user => <li key={user}>{user}</li>);
```

Here, the user `"B"` is excluded, and only the remaining values are rendered.

### Conceptual Difference

* `filter()` → Removes elements
* `map() → Transforms elements
* Both methods are immutable, meaning they return a new array without altering the original data.

## Reusing Components, Lists, and Keys

### Reusing Components

React encourages component reusability, where the same component can be rendered multiple times with different props.

```jsx
<Card title="HTML" />
<Card title="CSS" />
<Card title="React" />
```

This approach reduces code duplication and improves maintainability.

## Lists and Keys in React

When rendering a list of components, React requires a key prop.

```jsx
items.map(item => (
  <Card key={item.id} title={item.name} />
));
```

### Importance of Keys

Keys are essential because they:

* Help React identify which items have changed
* Improve rendering performance
* Prevent unnecessary re-rendering

Keys must be unique and stable across renders.


## Passing Inline Styles as Props

Styles can be passed from a parent component to a child component using props. This is a common pattern for dynamic styling.

### Parent Component

```javascript
function App() {
  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: "orange",
    borderRadius: "8px"
  };

  return <Box style={boxStyle} />;
}
```

### Child Component

```javascript
function Box({ style }) {
  return <div style={style}></div>;
}
```

### Key Points

* Inline styles are written as JavaScript objects
* CSS property names must use camelCase
* The style object is applied using `style={}`


## Passing Partial Styles and Merging Them in the Child Component

Instead of passing an entire style object, individual style values can be passed as props and combined inside the child component.

### Parent Component

```jsx
function App() {
  return (
    <Card
      bgColor="black"
      textColor="white"
    />
  );
}
```

### Child Component

```javascript
function Card({ bgColor, textColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "20px"
      }}
    >
      Styled via Props
    </div>
  );
}
```

### Explanation

In this approach:

* The parent controls what values are passed
* The child controls how styles are applied
* This improves flexibility and separation of concerns


#   Build Mini project

##  STEP 1: Create a React Project (Using Vite)

Open terminal and run:

```bash
npm create vite
```

Choose:

* Project name → `user-dashboard`
* Framework → React
* Variant → JavaScript

Then:

```bash
cd user-dashboard
npm install
npm run dev
```
 Now React is running.

##  STEP 2: Install Tailwind CSS

Inside your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure `tailwind.config.js`

```js
content: [
  "./index.html",
  "./src/**/*.{js,jsx}"
]
```

### Add Tailwind to `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

 Now Tailwind CSS works in your React app.


##  STEP 3: Understand the Folder Structure

```
src/
├── components/     → Reusable UI blocks
│   ├── Navbar.jsx
│   ├── UserCard.jsx
│   └── UserList.jsx
├── data/           → Static or API data
│   └── users.js
├── App.jsx         → Root component
└── main.jsx        → Entry point
```

###  Why this structure?

* components/ → UI logic
* data/ → Separation of data from UI
* App.jsx → Combines everything
* main.jsx → Injects React into browser DOM

This is industry-level structure.


##  STEP 4: `main.jsx` (React Entry Point)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
```

### What happens here?

1. ReactDOM.createRoot

   * Connects React to real browser DOM
2. StrictMode

   * Helps catch errors during development
3. App

   * Root component of your application

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
 Without `main.jsx`, React cannot render anything.


##  STEP 5: `App.jsx` (Main Layout Controller)

```jsx
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { users } from "./data/users";
```

### Responsibilities of `App.jsx`

* Acts as central controller
* Sends data to child components (props)
* Controls layout

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="User Dashboard" />
      <UserList users={users} />
    </div>
  );
}
```

### Key concepts here:

* Props → `title`, `users`
* Component reuse
* Tailwind styling


##  STEP 6: `users.js` (Data Layer)

```js
export const users = [
  { id: 1, name: "Amit Sharma", role: "Frontend Developer", active: true },
  ...
];
```

### Why separate data?

✔ Clean code
✔ Easy to replace with API later
✔ Follows MVC-like pattern


##  STEP 7: `Navbar.jsx` (Reusable Component)

```jsx
function Navbar({ title }) {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-semibold">{title}</h1>
    </nav>
  );
}
```

### Concepts used:

* Props destructuring
* Reusable component
* Single responsibility

 Navbar can be reused in any page.


##  STEP 8: `UserList.jsx` (Logic + Rendering)

```jsx
import UserCard from "./UserCard";
```

### Filtering Logic

```js
const activeUsers = users.filter(user => user.active);
```

 Why?

* Business logic lives here
* UI components stay clean

### Rendering List

```jsx
{activeUsers.map(user => (
  <UserCard
    key={user.id}
    name={user.name}
    role={user.role}
    bgColor="white"
    textColor="black"
  />
))}
```

### Important concepts:

* `map()` → Render multiple components
* `key` → Helps React track elements efficiently
* Props → Passing data downward



##  STEP 9: `UserCard.jsx` (Presentational Component)

```jsx
function UserCard({ name, role, bgColor, textColor }) {
```

This is a dumb / UI-only component.

```jsx
<div
  style={{ backgroundColor: bgColor, color: textColor }}
  className="rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
>
```

### Why inline styles + Tailwind?

* Inline → Dynamic values
* Tailwind → Layout & effects

```jsx
<h2>{name}</h2>
<p>{role}</p>
```

Single responsibility principle



##  STEP 10: How Data Flows 

```
users.js
   ↓
App.jsx
   ↓ (props)
UserList.jsx
   ↓ (props)
UserCard.jsx
```

 This is called unidirectional data flow
 Core concept of React



##  STEP 11: Why Capital Letters in Components?

```jsx
function UserCard() {}
```

✔ React treats capitalized names as components
✔ Lowercase = HTML tag
