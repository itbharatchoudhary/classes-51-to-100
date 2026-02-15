# Local Storage (Web Storage API)

Local Storage is a feature provided by modern web browsers that allows a web application to store data inside the user’s browser.

This stored data is permanent in nature. It does not get deleted automatically and remains available even after the browser is refreshed or restarted.

Local Storage is a part of the Web Storage API.


## Characteristics of Local Storage

* Data is stored in the form of key–value pairs
* Only string data can be stored
* Stored data does not expire automatically
* Data remains after:

  * Page refresh
  * Browser close
  * System restart
* Data is stored per domain

### Features of Local Storage

| Feature          | Explanation                           |
| ---------------- | ------------------------------------- |
| Storage Type     | Key–Value pairs                       |
| Data Type        | Only strings                          |
| Storage Capacity | Approximately 5–10 MB                 |
| Scope            | Specific to one domain                |
| Expiry           | Never expires unless cleared manually |


## Basic Methods of Local Storage

Local Storage provides simple methods to store, retrieve, and remove data.


### 1. `setItem()` – Storing Data

The `setItem()` method is used to store data in Local Storage.

```javascript
localStorage.setItem("name", "Anubhav");
```

* `"name"` is the key
* `"Anubhav"` is the value

The value is always stored as a string.

### 2. `getItem()` – Retrieving Data

The `getItem()` method is used to read data from Local Storage.

```javascript
const name = localStorage.getItem("name");
console.log(name);
```

* If the key exists, it returns the stored value
* If the key does not exist, it returns `null`

### 3. `removeItem()` – Removing a Specific Item

The `removeItem()` method deletes a specific key and its value.

```javascript
localStorage.removeItem("name");
```

### 4. `clear()` – Removing All Data

The `clear()` method deletes all stored data from Local Storage.

```javascript
localStorage.clear();
```

## Storing Objects in Local Storage

### Problem

Local Storage cannot store objects directly because it only supports strings.

Example:

```javascript
localStorage.setItem("user", { name: "Anubhav", age: 24 });
```

This will not store the object properly.
Instead, it stores:

```
[object Object]
```


### Solution: `JSON.stringify()`

To store objects, we must convert them into a string format.


### Step 1: Convert Object into String

```javascript
const user = {
  name: "Anubhav",
  age: 24,
  role: "Developer"
};

localStorage.setItem("user", JSON.stringify(user));
```

* `JSON.stringify()` converts a JavaScript object into a JSON string
* This string can be stored safely in Local Storage


### Step 2: Convert String Back into Object

```javascript
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);
```

* `JSON.parse()` converts the JSON string back into a JavaScript object


## Storing Arrays in Local Storage

Arrays also cannot be stored directly and must be converted into strings.


### Example Array

```javascript
const skills = ["HTML", "CSS", "JavaScript", "React"];
```



### Storing the Array

```javascript
localStorage.setItem("skills", JSON.stringify(skills));
```



### Retrieving the Array

```javascript
const storedSkills = JSON.parse(localStorage.getItem("skills"));
console.log(storedSkills[2]); // JavaScript
```



## Flow of Storing Objects and Arrays

```
JavaScript Object / Array
        ↓
JSON.stringify()
        ↓
Local Storage (String format)
        ↓
JSON.parse()
        ↓
JavaScript Object / Array
```

## Comparison: Local Storage, Session Storage, and Cookies

Different browser storage methods are used for different purposes.

### Explanation

* Local Storage
  Stores data permanently in the browser. It is commonly used to store user preferences such as theme or language.

* Session Storage
  Stores data only for the current browser tab. The data is removed when the tab is closed.

* Cookies
  Small pieces of data that are sent to the server with every HTTP request. They are mainly used for authentication and tracking.


### Comparison Table

| Feature          | Local Storage            | Session Storage        | Cookies                |
| ---------------- | ------------------------ | ---------------------- | ---------------------- |
| Data Lifetime    | Permanent until cleared  | Until tab is closed    | Based on expiry time   |
| Storage Capacity | 5–10 MB                  | ~5 MB                  | ~4 KB                  |
| Scope            | Per domain               | Per tab                | Sent with each request |
| Data Type        | Strings only             | Strings only           | Strings only           |
| Server Access    | Not sent to server       | Not sent to server     | Automatically sent     |
| Performance      | Fast                     | Fast                   | Slower                 |
| Use Case         | Preferences, cached data | Temporary session data | Authentication         |


### One-Line 

* Local Storage: Used for long-term client-side data
* Session Storage: Used for temporary, tab-specific data
* Cookies: Used when data must be shared with the server


# React Fragments

In React, a component must return only one parent element.

A Fragment is used to group multiple elements without adding an extra element to the DOM.


## Fragment Syntax

```javascript
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

This shorthand syntax is the most commonly used.


## Advantages of React Fragments

* No unnecessary HTML elements
* Cleaner and more readable code
* Better performance
* Useful in tables (`<tr>`, `<td>`)
* Maintains correct HTML structure


## When to Use Fragments

Fragments should be used when:

* Multiple elements must be returned
* Extra wrapper elements are not required
* Clean and semantic HTML is needed
* Rendering lists of elements

#  Project on gallery for community
