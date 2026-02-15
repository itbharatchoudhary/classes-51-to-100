Day 60 — Exercises

Exercise 1 — Create a function `afterDelay` that takes a time (in milliseconds) and a callback. After the given delay, the function should execute the callback, and the callback must print `"Callback executed"`.
Hint:Use **setTimeout** to delay the execution and pass the callback directly to it.
---

Exercise 2 — Create a `getUser` function that accepts a username and returns a user object after 1 second.
Inside the callback of `getUser`, call another function `getUserPosts` which returns a list of posts after 1 second.
Finally, print the username and the posts using **callback chaining**.
Hint:You must call the second function **inside** the callback of the first function to pass the data forward.
---

Exercise 3 — Create three functions:
* `loginUser`
* `fetchPermissions`
* `loadDashboard`
Each function should return its result after 1 second.
Chain them using **nested callbacks** so that the program:
1. Logs in the user
2. Fetches their permissions
3. Loads the dashboard
4. Prints `"Dashboard loaded"` at the end
Hint:Each step depends on data from the previous one, so each function must be called **inside** the callback of the previous function (classic callback nesting).
---

Exercise 3 = Create three functions:
fetchProduct(productId) → returns a product object after 1 second
fetchReviews(productId) → returns an array of reviews after 1 second
displayProductDetails(product, reviews) → prints the product name and its reviews after 1 second
Use callback chaining to:
First fetch the product
Then fetch its reviews
Then display the product details along with its reviews
Hint:
Each function depends on the result of the previous one, so call the next function inside the callback of the previous function.
