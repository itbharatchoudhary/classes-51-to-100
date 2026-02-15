# Two way binding
> The data in the state and the data shown in the UI stay synchronized with each other.


* When the state changes, the UI updates automatically
* When the user changes the UI (for example, types in an input), the state updates automatically

So, data flows in both directions.

## 2. Does React Support Two-Way Binding Directly?

React does not support automatic two-way binding like Angular.

Instead, React achieves two-way binding by using:

1. State
2. Controlled components
3. Event handlers

This approach gives better control and predictability.

## 3. Core Idea Behind Two-Way Binding in React

In React:

* State → UI (one-way)
* UI → State (using events)

When combined, this behaves like two-way binding.

## 4.  Example: Text Input

### Step 1: Create State

```jsx
const [name, setName] = useState("");
```

* `name` → stores the data
* `setName` → updates the data


### Step 2: Bind State to Input (State → UI)

```jsx
<input type="text" value={name} />
```

* The input always shows the value stored in `name`

### Step 3: Update State on Change (UI → State)

```jsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

* When the user types, `onChange` is triggered
* `setName` updates the state
* UI updates again automatically

 -> Two-way binding is achieved

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Two Way Binding Example</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name is: {name}</p>
    </div>
  );
}

export default App;
```

| Action              | What Happens       |
| ------------------- | ------------------ |
| User types in input | `onChange` fires   |
| `setName()` runs    | State updates      |
| State updates       | UI re-renders      |
| UI shows new value  | Data stays in sync |

## 7. Why Controlled Components Are Important

This input is called a controlled component because:

> The value of the input is fully controlled by React state.

Advantages:

* Easy validation
* Better debugging
* Predictable data flow

## 8. Two-Way Binding with Multiple Inputs

```jsx
const [formData, setFormData] = useState({
  email: "",
  password: ""
});

<input
  type="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
/>

<input
  type="password"
  value={formData.password}
  onChange={(e) =>
    setFormData({ ...formData, password: e.target.value })
  }
/>
```

## 9. Important Points to Remember

1. React uses one-way data flow
2. Two-way binding is manually implemented
3. `value` connects state to UI
4. `onChange` connects UI to state
5. This pattern is called controlled components

