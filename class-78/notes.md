
# The `useEffect` Hook in React

## Introduction

`useEffect` is a built-in Hook in React that enables functional components to perform side effects.

A *side effect* refers to any operation that interacts with elements outside the normal rendering process of a component. These operations do not directly contribute to the UI output but are necessary for application behavior.

### Common Examples of Side Effects

* Fetching data from an external API
* Directly manipulating the DOM
* Setting timers using `setTimeout` or `setInterval`
* Adding or removing event listeners

Before the introduction of Hooks, side effects in React were handled using lifecycle methods in class components, such as:

* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount`

The `useEffect` Hook combines the functionality of all these lifecycle methods into a single, unified API for functional components.

---

## Syntax of `useEffect`

```jsx
useEffect(() => {
  // Side effect logic
}, [dependencies]);
```

### Explanation

* Effect function: Contains the code responsible for performing the side effect
* Dependency array: Controls when the effect should execute

---

## Types of `useEffect` Usage

### 1. `useEffect` Without a Dependency Array

```jsx
useEffect(() => {
  console.log("Runs on every render");
});
```

#### Behavior

* Executes after every render of the component
* Runs after the initial render as well as every subsequent update

#### Note

This approach is generally discouraged because it can lead to unnecessary re-executions and negatively affect performance.

---

### 2. `useEffect` With an Empty Dependency Array (`[]`)

```jsx
useEffect(() => {
  console.log("Runs once");
}, []);
```

#### Meaning

* Executes only once, immediately after the component’s first render
* Does not run again on re-renders

#### Equivalent Lifecycle Method

* `componentDidMount`

#### Common Use Cases

* Fetching data when the component loads
* Performing initial setup tasks
* Creating timers or registering event listeners

#### Example: Fetching Data from an API

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

In this example, the API call is executed only once when the component is mounted.


### 3. `useEffect` With Dependencies

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

#### Behavior

* Executes once after the initial render
* Re-executes only when the value of `count` changes

#### Purpose

This pattern is used when the side effect depends on specific state variables or props.


## Cleanup Function in `useEffect`

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

### Explanation

* The function returned from `useEffect` is known as the cleanup function
* It is executed when:

  * The component is unmounted
  * The effect is about to run again

### Importance of Cleanup

* Prevents memory leaks
* Ensures proper removal of timers, subscriptions, and event listeners



## Important Rules of `useEffect`

1. All state variables and props used inside `useEffect` should be included in the dependency array
2. An empty dependency array (`[]`) indicates that the effect is intentionally executed only once
3. A cleanup function should always be used when working with:

   * Timers
   * Subscriptions
   * Event listeners

