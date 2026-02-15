# Client Side Rendering (CSR)

## Definition

- Client Side Rendering (CSR) is a web rendering technique in which the browser (client) is responsible for generating and displaying the user interface.

In CSR, the server sends a basic HTML file along with JavaScript files. The browser then executes the JavaScript to build the complete UI.

## Working of Client Side Rendering

The CSR process works as follows:

1. The user requests a web page.
2. The server sends:

   * A nearly empty `index.html` file
   * A JavaScript bundle containing React code
3. The browser downloads the JavaScript.
4. React runs inside the browser.
5. API requests are made from the browser.
6. The UI is created and displayed dynamically.

## Advantages of Client Side Rendering

* Suitable for highly interactive applications
* Provides smooth page transitions
* Reduces load on the server
* Ideal for Single Page Applications (SPAs)

## Disadvantages of Client Side Rendering

* SEO performance is weak by default
* Initial page load is slower
* JavaScript must be enabled
* Users may see a blank screen until JavaScript loads

## Applications of Client Side Rendering

* Admin dashboards
* Social media platforms
* Interactive web applications

# Server Side Rendering (SSR)

## Definition

- Server Side Rendering (SSR is a rendering method in which the server generates complete HTML content for every request and sends it to the browser.

The browser can immediately display the content without waiting for JavaScript execution.


## Working of Server Side Rendering

The SSR process follows these steps:

1. The user requests a web page.
2. The server:

   * Fetches required data
   * Renders React components on the server
3. The server sends fully rendered HTML to the browser.
4. The browser displays content instantly.
5. JavaScript hydrates the page to enable interactivity.



## Advantages of Server Side Rendering

* Excellent support for SEO
* Faster first contentful paint
* Better performance on low-end devices
* Suitable for content-heavy websites



## Disadvantages of Server Side Rendering

* Increased server workload
* More complex application structure
* Slower page navigation compared to CSR
* Requires Node.js environment



## Applications of Server Side Rendering

* Blogs and news websites
* E-commerce platforms
* Marketing and informational websites



# Comparison Between CSR and SSR

| Feature            | CSR              | SSR              |
| ------------------ | ---------------- | ---------------- |
| Rendering Location | Browser          | Server           |
| Initial Load Time  | Slower           | Faster           |
| SEO Support        | Poor             | Excellent        |
| Server Load        | Low              | High             |
| Interactivity      | High             | Moderate         |
| Best Used For      | Web applications | Content websites |



# Axios – HTTP Client Library

## Definition

Axios is a promise-based HTTP client library** used to send and receive data from APIs.

It works in both:

* Browsers
* Node.js environments

Axios simplifies API communication compared to the native `fetch` method.


## Reasons for Using Axios

* Automatically converts response data to JSON
* Provides clean and readable syntax
* Handles errors efficiently
* Supports request and response interceptors
* Allows request cancellation and timeouts


## Axios vs Fetch

* Fetch requires manual JSON parsing
* Axios returns parsed data directly
* Axios automatically handles HTTP errors
* Fetch requires extra configuration for error handling


# Axios in React Applications

## Usage of Axios in React

Axios is commonly used:

* Inside lifecycle methods
* Inside React Hooks such as `useEffect`
* During user interactions like button clicks or form submissions


## Axios GET Request Example in React

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default App;
```

* `axios.get()` sends a GET request to the API
* `response.data` contains the server response
* `useEffect` ensures the API call runs only once
* `useState` stores the data and triggers UI re-rendering

# Axios Error Handling

```jsx
axios.get("/api/data")
  .then(res => console.log(res.data))
  .catch(err => {
    if (err.response) {
      console.log("Server Error:", err.response.status);
    } else {
      console.log("Network Error");
    }
  });
```

## Types of Errors in Axios

* Network errors
* Server-side errors (4xx, 5xx)
* Timeout errors
