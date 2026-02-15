This notes cover class ->  81,82,83 
# The Context API in React

The Context API is a built-in feature of React that enables the sharing of data across multiple components without the need to pass props explicitly through every level of the component tree.

In large applications, many components often require access to the same data. The Context API provides a clean and efficient mechanism for managing such global or application-wide state.

## 1. Why we need Context API: 

### Problem Addressed by Prop Drilling

Prop drilling refers to the process of passing data from a parent component to deeply nested child components through several intermediate components, even when those intermediate components do not require the data.

### Example of Prop Drilling

```
App → ComponentA → ComponentB → ComponentC
```

In this scenario, only `ComponentC` actually needs the data, yet it must be passed through `ComponentA` and `ComponentB`.

### Solution Using Context API

```
App (Provider) → ComponentC (Consumer)
```

With Context API, data is provided at a higher level and can be accessed directly by any component within the provider tree, eliminating unnecessary prop passing.

## 2. Appropriate Use Cases for Context API

The Context API should be used when data is:

* Global in nature
* Required by multiple components across the application

### Common Practical Applications

* User authentication and authorization data
* Theme management (light mode / dark mode)
* Language and localization (i18n)
* Shopping cart data in small to medium applications
* Application-level configuration or settings

 Caution:
Context API should be avoided for frequently changing data, as it can cause unnecessary re-renders and negatively affect performance.



## 3. Fundamental Components of the Context API

The Context API consists of three core elements:

1. `createContext()` – Creates a context object
2. `Context.Provider` – Supplies data to the component tree
3. `useContext()` – Consumes the provided data



## 4. Step-by-Step Implementation of Context API

### Step 1: Creating a Context

```jsx
// UserContext.js
import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;
```

#### Explanation

* `createContext()` initializes a context object
* This object is designed to store and distribute shared data across components

### Step 2: Providing Context Data

```jsx
// App.jsx
import UserContext from './UserContext';
import Dashboard from './Dashboard';

function App() {
  const user = 'Anubhav';

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;
```

#### Explanation

* The `Provider` component makes data available to all its descendant components
* The `value` prop contains the data to be shared
* Any component within the Provider tree can access this value

### Step 3: Consuming Context Data

```jsx
// Dashboard.jsx
import { useContext } from 'react';
import UserContext from './UserContext';

function Dashboard() {
  const user = useContext(UserContext);

  return <h1>Welcome, {user}</h1>;
}

export default Dashboard;
```

#### Explanation

* `useContext(UserContext)` retrieves the value from the nearest Provider
* No props are required
* This approach improves readability and maintainability


## 5. Using Context with Object-Based Data

### Providing Object Data

```jsx
<UserContext.Provider value={{ name: 'Anubhav', role: 'Admin' }}>
  <Dashboard />
</UserContext.Provider>
```

### Consuming Object Data

```jsx
const { name, role } = useContext(UserContext);

console.log(name); // Anubhav
console.log(role); // Admin
```

#### Explanation

* Context values can include **objects, arrays, functions, or state variables**
* Destructuring is commonly used for clarity and convenience

## 6. Managing Dynamic Data with Context and State

```jsx
// App.jsx
import { useState } from 'react';
import UserContext from './UserContext';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState('Guest');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  );
}
```

```jsx
// Profile.jsx
import { useContext } from 'react';
import UserContext from './UserContext';

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>{user}</h2>
      <button onClick={() => setUser('Anubhav')}>
        Login
      </button>
    </>
  );
}
```

#### Explanation

* Context can distribute both state and state-updating functions
* This pattern is widely used in authentication and user management systems


## 7. Creating a Custom Context Provider (Recommended Practice)

```jsx
// UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState('Guest');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

```jsx
// App.jsx
import { UserProvider } from './UserContext';
import Profile from './Profile';

function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}
```

#### Explanation

* This approach encapsulates context logic in a reusable component
* It enhances code organization and scalability
* It is considered an industry best practice



## 8. Using Multiple Contexts in an Application

```jsx
<ThemeContext.Provider value="dark">
  <UserContext.Provider value="Anubhav">
    <Dashboard />
  </UserContext.Provider>
</ThemeContext.Provider>
```

#### Explanation

* React supports multiple contexts simultaneously
* Each context is responsible for managing a specific concern
* This promotes modular and maintainable architecture



## 9. Comparison: Props vs Context API

| Props                                   | Context API                      |
| --------------------------------------- | -------------------------------- |
| Data passed manually                    | Data shared globally             |
| Suitable for parent-child communication | Ideal for application-wide state |
| Simple and explicit                     | Powerful and flexible            |
| No re-render issues                     | Overuse may impact performance   |



#  React Context API Project 

(Classes 81, 82, 83 – Complete Project Based Notes)

## 1. Introduction to Context API

The Context API is a built-in feature of React used to share data globally between components without passing props manually at every level.

It helps in managing application-wide state in a clean and organized manner.

## 2. Problem of Prop Drilling

### What is Prop Drilling?

Prop drilling occurs when data is passed from a parent component to deeply nested child components through multiple intermediate components that do not require that data.

### Example

```
App → Navbar → Dashboard → Profile
```

Even if only `Profile` needs the data, all components must receive it as props.

### Disadvantages

* Unnecessary code
* Poor readability
* Difficult maintenance

## 3. Solution: Context API

The Context API allows data to be:

* Provided at a higher level
* Directly consumed by required components

```
App (Provider)
   ↓
Profile (Consumer)
```

This eliminates prop drilling completely.

## 4. Core Elements of Context API

The Context API consists of three main parts:

1. createContext()

   * Creates a context object

2. Context.Provider

   * Provides data to components

3. useContext()

   * Used to consume data inside components

## 5. Project 

### Project Name: ContextHub Pro

This project demonstrates:

* Authentication using Context API
* Dark and Light mode
* Fetching data from an Internet API
* Global state management
* Clean UI using Tailwind CSS

## 7. User Authentication Using Context API

### Purpose

To manage login and logout state globally.

### UserContext Responsibilities

* Store user data
* Provide login and logout functions

### Key Concepts Used

* `useState`
* Object-based context
* Global access to authentication state

### Benefits

* No prop drilling
* Easy access to user state in any component



## 9. Internet API Integration Using Context API

### API Used

JSONPlaceholder

```
https://jsonplaceholder.typicode.com/users
```

### Why This API?

* Free and public
* No API key required
* Works in any browser
* Suitable for learning


### ApiContext Responsibilities

* Fetch data from the internet
* Store API data globally
* Handle loading state
* Handle error state

### States Used

* `users` → API data
* `loading` → spinner control
* `error` → error handling


## 10. Fetching Data Using useEffect

The API call is made using `useEffect` to ensure it runs only once when the component mounts.

### Steps

1. Call `fetch()`
2. Convert response to JSON
3. Store data in state
4. Handle errors using `try/catch`
5. Stop loader after completion


## 11. Loader Component

### Purpose

To provide visual feedback while data is loading.

### Advantages

* Better user experience
* Professional UI behavior

The loader is displayed when `loading === true`.

## 12. Consuming Context Data Using useContext

Components like:

* Navbar
* ProfileCard
* UsersList

use `useContext()` to directly access shared data.

### Example

```jsx
const { users, loading, error } = useContext(ApiContext);
```

This avoids passing props manually.

## 13. Multiple Context Providers

The application uses multiple contexts together:

* UserContext → Authentication
* ApiContext → Internet API data

They are wrapped inside `App.jsx` in a clean hierarchy.

#  FINAL PROJECT 

##  What this project includes

* React (Vite)
* Context API (User + API)
* Public Internet API
* Tailwind CSS UI
* Loader & error handling
* Clean folder structure

#  Structure

```
src/
│── context/
│   ├── UserContext.jsx
│   └── ApiContext.jsx
│
│── components/
│   ├── Navbar.jsx
│   ├── Dashboard.jsx
│   ├── ProfileCard.jsx
│   ├── UsersList.jsx
│   └── Loader.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

#  STEP-BY-STEP TERMINAL COMMANDS

-> Type exactly in PowerShell / Terminal

##  STEP 1: Create React Project

```bash
npm create vite@latest project
```

Choose:

```
Framework: React
Variant: JavaScript
```

##  STEP 2: Enter Project Folder

```bash
cd project
```


##  STEP 3: Install Dependencies

```bash
npm install
```


##  STEP 4: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```


##  STEP 5: Initialize Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

##  STEP 6: Setup Tailwind CSS File

Open `src/index.css` and type:

```css
@import "tailwindcss";
```

```vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

##  STEP 7: Create Folders

```bash
mkdir src/context
mkdir src/components
```

##  STEP 8: Create Context Files

### Windows / PowerShell

```bash
type nul > src/context/UserContext.jsx
type nul > src/context/ApiContext.jsx
```

(Mac/Linux users: use `touch` instead)


## STEP 9: Create Component Files

```bash
type nul > src/components/Navbar.jsx
type nul > src/components/Dashboard.jsx
type nul > src/components/ProfileCard.jsx
type nul > src/components/UsersList.jsx
type nul > src/components/Loader.jsx
```

##  STEP 10: Replace Main Files

```bash
type nul > src/App.jsx
type nul > src/main.jsx
```



#  FULL CODE 
Check the files

#  FINAL STEP: RUN PROJECT

```bash
npm run dev
```

Open browser:

```
http://localhost:5173
```
