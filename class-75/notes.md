# Dynamic Data Persistence

## 1. The `map()` Method

The `map()` method is a powerful higher-order function in JavaScript used to iterate over an array and manipulate its elements.

* Definition: It creates a new array populated with the results of calling a provided function on every element in the calling array.
* Key Characteristic: Unlike `forEach()`, `map()` does not mutate the original array; it returns a new one, making it essential for functional programming and rendering lists in frameworks like React.

## 2. Web Storage API: Local Storage
- Local Storage is a mechanism that allows web applications to store data locally within the user's browser with no expiration date.

* Persistence: The data survives page refreshes and even closing the browser/OS.
* Key-Value Pairs: Data is stored as strings in a simple key-value format.
* Core Methods:
* `localStorage.setItem('key', 'value')`: Adds a data item.
* `localStorage.getItem('key')`: Retrieves a data item.
* `localStorage.removeItem('key')`: Deletes a specific item.
* `localStorage.clear()`: Wipes all data in storage for that domain.

## 3. Dynamic Content Management (Add & Delete)

In the context of the Document Object Model (DOM), adding and deleting features refer to the programmatic manipulation of UI elements based on user interaction.

### Adding Elements

To add data to a web page dynamically, the process typically involves:

1. Creation: Using `document.createElement()` to generate a new node.
2. Assignment: Defining the content (e.g., `textContent` or `innerHTML`).
3. Attachment: Using `appendChild()` or `prepend()` to insert the element into the visible DOM tree.

### Deleting Elements

To remove data or UI components:

1. Selection: Identifying the specific element via ID, class, or event target.
2. Removal: Executing the `.remove()` method on the element or using `removeChild()` on the parent node.


# Project on Contact which have add and remove feature 