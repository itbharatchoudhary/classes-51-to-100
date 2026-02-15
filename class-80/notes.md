

# Programmatic Navigation and Advanced Routing in React Router

## 1. `useNavigate()`

### Definition

`useNavigate()` is a React Router Hook that enables programmatic navigation that is, navigation triggered by JavaScript logic rather than by clicking a link.

### Purpose

It is commonly used when navigation must occur after an action or condition, such as:

* Successful login
* Form submission
* Logout
* Authentication checks
* Conditional redirects

### Example

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // login logic
    navigate("/dashboard"); // redirect user
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

### Key Points

* It replaces `useHistory` from older versions of React Router
* Can be used only inside functional components
* Supports browser-like navigation:

  * `navigate(-1)` → go back
  * `navigate(1)` → go forward
* Accepts options like `{ replace: true }` to prevent back navigation

###  Where to Use It in Your Project

Use `useNavigate()` inside page components, such as:

* `Login.jsx`
* `Register.jsx`
* `Logout.jsx`
* Any component that handles logic-based redirects



## 2. `Outlet`

### Definition

`<Outlet />` is a placeholder component used to render nested (child) routes inside a parent route.

### Purpose

It allows you to create layouts (such as a navbar or sidebar) that remain visible while different child pages are rendered within them.

### Example Layout Component

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  );
}
```

### Example Route Configuration

```jsx
{
  path: "/",
  element: <Layout />,
  children: [
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> }
  ]
}
```

### Key Points

* The parent component must include `<Outlet />`
* Child routes render exactly where `<Outlet />` is placed
* Without `<Outlet />`, nested routes will not appear

###  Where to Use It in Your Project

* Create a layout file such as:

  * `Layout.jsx`
  * `MainLayout.jsx`
* Use it for:

  * Navbar layouts
  * Dashboard layouts
  * Sidebar-based applications

## 3. `createBrowserRouter`

### Definition

`createBrowserRouter()` is the modern routing API introduced in React Router v6.4+, allowing routes to be defined using objects instead of JSX.

### Purpose

It provides:

* Cleaner route definitions
* Natural nesting
* Advanced features (loaders, actions, error boundaries)

### Example

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### Key Points

* Replaces `<BrowserRouter>` + `<Routes>` + `<Route>`
* Routes are defined in a **single configuration object**
* Works seamlessly with nested routes
* Required for advanced features like loaders and actions

###  Where to Use It in Your Project

* Define the router in:

  * `App.jsx` or
  * `router.jsx` (recommended for clean architecture)
* Use `<RouterProvider />` in `main.jsx` or `App.jsx`


## 4. `NavLink`

### Definition

`NavLink` is a special version of `Link` that automatically detects whether the link matches the current active route.

### Purpose

It is used to apply active styles to navigation links, especially in navbars and side menus.

### Example

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavLink
      to="/home"
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Home
    </NavLink>
  );
}
```

### Key Points

* Provides the `isActive` state
* Ideal for navigation menus
* Preferred over `Link` when styling active routes

###  Where to Use It in Your Project

* Inside navigation components such as:

  * `Navbar.jsx`
  * `Sidebar.jsx`
* Commonly paired with Tailwind or CSS active styles



## Big Picture

* `createBrowserRouter` → defines your routes
* `Layout + Outlet` → structures your UI
* `NavLink` → handles navigation UI
* `useNavigate` → handles logic-based redirects
