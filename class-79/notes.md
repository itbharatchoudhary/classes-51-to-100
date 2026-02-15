# React Routing 

## What is Routing?

- Routing is the process of determining how a user is directed from one page to another within an application or a website.

In web development, routing allows a website to display different content or pages based on the URL requested by the user, without necessarily reloading the entire page.

When a user enters a URL in the browser or clicks on a link, the routing system:

1. Reads the URL
2. Matches it with a predefined route
3. Loads the corresponding page or component

Thus, routing acts as a navigation mechanism that connects different parts of an application.

- Why We Need React Router?

React does not support routing by default.
So we use a library called React Router DOM to manage routes.

## Types of Routing

### 1. Server-Side Routing

In server-side routing, every page request is sent to the server.

* The server processes the request
* A new HTML page is returned
* The page reloads every time

- Example: Traditional websites using PHP, Java, or ASP.NET.


### 2. Client-Side Routing

In client-side routing, navigation is handled inside the browser using JavaScript.

* The page does not fully reload
* Only the required content changes
* Provides faster and smoother user experience

- Example Single Page Applications (SPAs) built with React, Angular, or Vue.

## Importance of Routing

Routing is important because it:

* Enables smooth navigation between pages
* Improves user experience
* Organizes application structure
* Helps in building scalable web applications

# Single Page Application (SPA) & Multi Page Application (MPA)

## Single Page Application (SPA)

A Single Page Application (SPA) is a type of web application in which only one HTML page is loaded initially. After the first load, the application updates the content dynamically without reloading the entire page.

In an SPA, when a user clicks a link or performs an action, the browser does not request a new page from the server. Instead, JavaScript updates only the required part of the page. Data is usually fetched from the server using APIs.

### Characteristics of SPA

* Loads a single HTML file
* Uses JavaScript to update content
* Page does not refresh during navigation
* Faster and smoother user experience

### Advantages of SPA

* Faster navigation after the first load
* Smooth user experience similar to mobile apps
* Less server load after initial request

### Disadvantages of SPA

* Initial loading time can be slow
* SEO is more difficult (but manageable with modern tools)
* Heavily dependent on JavaScript

### Examples

* Gmail
* Google Maps
* Facebook
* React, Angular, and Vue applications

## Multi Page Application (MPA)

A Multi Page Application (MPA) is a traditional type of web application where each page is a separate HTML document. Every time the user navigates to a new page, the browser requests a new page from the server.

In an MPA, the server handles most of the logic and sends a complete new page for each request.

### Characteristics of MPA

* Multiple HTML pages
* Full page reload on navigation
* Server-side rendering
* Traditional web structure

### Advantages of MPA

* Better SEO by default
* Easier to build for large content-based websites
* Works well even with limited JavaScript

### Disadvantages of MPA

* Slower navigation due to full page reloads
* More server requests
* User experience is less smooth compared to SPA

### Examples

* Amazon
* Flipkart
* News websites
* Traditional PHP, JSP, or ASP.NET websites

## Key Differences Between SPA and MPA

| Feature    | SPA                     | MPA                   |
| ---------- | ----------------------- | --------------------- |
| Page Load  | Single load             | Multiple loads        |
| Navigation | Dynamic, no refresh     | Full page refresh     |
| Speed      | Faster after first load | Slower due to reloads |
| SEO        | More complex            | Easier                |
| Technology | React, Angular, Vue     | PHP, ASP.NET, JSP     |


# Installing React Router DOM

To install React Router, run the following command:

```bash
npm install react-router-dom
```

This adds routing capabilities to your React project.


# BrowserRouter (Main Entry Point)

`BrowserRouter` enables routing using the browser’s URL.

### Step 1: Import BrowserRouter in `main.jsx`

```jsx
import { BrowserRouter } from "react-router-dom";
```

### Step 2: Wrap the App component

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

- Why we do this:
So that routing works in the entire application.

## HTML5 History API

### Explanation

`BrowserRouter` uses the HTML5 History API to manage navigation.

### What the History API Does

* Updates the URL without reloading the page
* Maintains browser history (Back / Forward)
* Enables smooth client-side navigation

---

### Why It Matters

The HTML5 History API allows React applications to behave like traditional websites while maintaining SPA performance.


# Routes and Route (App.jsx)

### Import Routes and Route

```jsx
import { Routes, Route } from "react-router-dom";
```

### Define Routes

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

* `<Routes>` → Container for all routes
* `<Route>` → Defines a single path
* `path` → URL
* `element` → Component to render



## Navigation: `<a>` and `<Link>`

Navigation is the process of moving from one page or view to another in a web application. In web development, navigation can be handled in different ways depending on the type of application.

## 1. `<a>` (Anchor Tag)

The `<a>` tag is a standard HTML element used to create hyperlinks.

### Definition

The `<a>` tag is used to navigate from one web page to another by loading a new page from the server.

### Syntax

```html
<a href="/about">About</a>
```

### How it works

* When a user clicks an `<a>` tag, the browser reloads the entire page.
* A new request is sent to the server.
* The current page is destroyed and a new page is loaded.

### Use cases

* Traditional multi-page applications
* External links (e.g., Google, YouTube)
* Static websites

### Advantages

* Simple and universally supported
* Works without JavaScript

### Disadvantages

* Causes full page reload
* Slower user experience in modern web apps

## 2. `<Link>` (React Router)

`<Link>` is a component provided by React Router for navigation in React applications.

### Definition

The `<Link>` component is used for client-side navigation in single-page applications (SPA) without reloading the page.

### Syntax

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

### How it works

* `<Link>` changes the URL without refreshing the page.
* React Router updates the displayed component dynamically.
* The application state remains preserved.

### Use cases

* React single-page applications
* Internal navigation between components

### Advantages

* Fast navigation
* No page reload
* Better user experience

### Disadvantages

* Requires JavaScript
* Works only inside React Router environment


## 3. Key Differences

| Feature            | `<a>` Tag              | `<Link>`             |
| ------------------ | ---------------------- | -------------------- |
| Page Reload        | Yes                    | No                   |
| Used In            | HTML / Multi-page apps | React SPA            |
| Speed              | Slower                 | Faster               |
| State Preservation | No                     | Yes                  |
| External Links     | Yes                    | No (not recommended) |



## 4. When to Use What?

* Use `<a>` for:

  * External websites
  * Non-React projects

* Use `<Link>` for:

  * Internal navigation in React
  * Single-page applications


## Nested Routes

Definition:
Nested Routes are routes that exist inside another route. They are used when a page has a common layout (such as a navbar or sidebar) and different content changes within that layout.

Explanation:
In a React application, some pages share the same structure but display different inner components. Nested routing allows child routes to be rendered inside a parent route without reloading the entire page.

Example Use Case:
A dashboard where the header and sidebar remain the same, but the main content changes (Profile, Settings, Reports).

Key Point:
Nested Routes help in organizing related pages and improving code readability.

## `<Outlet />` Component

- `<Outlet />` is a component provided by React Router that acts as a placeholder for rendering child routes.


### Purpose

* Displays nested route components
* Maintains a shared layout
* Prevents repetition of common UI elements


### Explanation

When a parent route contains child routes, React Router renders the parent component first.
The child component is rendered only at the position of `<Outlet />`.


### Example

#### Route Configuration

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

#### Parent Component

```jsx
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default Dashboard;
```

### Important Note

Without `<Outlet />`, nested routes will not render.

##  Dynamic Routes

Definition:
Dynamic Routes are routes that accept **variable values** in the URL.

Explanation:
Instead of creating a separate route for every page, a dynamic route uses a parameter (such as an ID or username) to display different content based on the URL.

Example Use Case:

* Viewing different user profiles
* Opening individual product pages
* Showing contact details using an ID

Key Point:
Dynamic Routes make applications flexible and scalable by handling multiple similar pages with a single route definition.

### useParams Hook
-  useParams is a hook provided by React Router DOM that allows a component to access dynamic parameters from the URL.

- Dynamic parameters are values that change depending on the URL and are defined using a colon (:) in the route path.

#### Purpose
The main purpose of useParams is to:

- Read values from the URL
- Display dynamic data based on those values
- Avoid creating multiple routes for similar pages

#### Working Principle

- When a route contains a dynamic segment, React Router extracts the value from the URL and provides it to the component through the useParams hook.

Example
Route Definition
<Route path="/user/:id" element={<User />} />


Here, :id represents a dynamic parameter.

URL
/user/101

Component Usage

``` jsx
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  return (
    <h2>User ID: {params.id}</h2>
  );
};

export default User;
```

#### Important Points
- useParams() returns an object
- Parameter values are always strings
- If multiple parameters exist, all are returned in the same object

## Multiple Dynamic Parameters

A route can contain more than one dynamic parameter to represent complex URLs.

#### Use Case

- Product pages
- Category-based filtering
- Nested dynamic content

Example
Route
```
<Route path="/product/:category/:id" element={<Product />} />
```

URL
```
/product/mobile/45
```

Component
```
import { useParams } from "react-router-dom";

const Product = () => {
  const { category, id } = useParams();

  return (
    <h2>
      Category: {category}, Product ID: {id}
    </h2>
  );
};

export default Product;
```

#### Key Point

Multiple dynamic parameters increase flexibility and scalability of routing.

##  Not Found Route (404 Safety)

Definition:
A Not Found Route (404) is used to handle invalid or undefined URLs.

Explanation:
When a user enters a URL that does not match any existing route, the application should display a “Page Not Found” message instead of showing a blank screen or crashing.

Purpose:

* Improves user experience
* Prevents application errors
* Guides users back to valid pages

Key Point:
A 404 route acts as a safety net for incorrect paths and should always be included in a routing setup.

## Universal Route (Terminology)

### Definition

A Universal Route is a route that matches all undefined paths in an application.

### Syntax

```jsx
<Route path="*" element={<NotFound />} />
```

### Purpose

* Handles incorrect URLs
* Prevents blank screens
* Improves user experience

### Key Point

The asterisk (`*`) acts as a wildcard that matches any route not previously defined.
