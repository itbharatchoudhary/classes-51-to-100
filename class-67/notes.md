### what is react.js 
- React.js is an open-source JavaScript library used for building user interfaces (UIs), particularly for single-page applications where efficient rendering of dynamic content is required. It was developed and is maintained by Facebook.

### History of React

React was created by Jordan Walke, a software engineer at Facebook (Meta). It was first released in 2013. Today, React is maintained by Meta and a large open-source community.

### library 
- A library is a reusable set of functions, classes, or modules that can be imported and used in programs to perform common tasks, such as data manipulation, UI rendering, or mathematical calculations, without having to implement them manually
Example :
 - React.js → a JavaScript library for building user interfaces
 - Lodash → a JavaScript library for utility functions
 - jQuery → a JavaScript library for DOM manipulation

### Why We Need React.js

1.  Efficient UI Updates
- Traditional JavaScript manipulates the real DOM directly, which can be slow for complex interfaces.
- React uses a Virtual DOM, updating only what’s necessary, making apps faster and more efficient.

2. Reusable Components
- React lets you build components that can be reused across the app.
- This reduces code duplication and makes the project easier to maintain.

3. Declarative Approach
- Instead of describing how to update the UI step by step, you describe what the UI should look like for a given state.
- React handles the rest, making code simpler and less error-prone.

4. Single Page Application (SPA) Support 
- React helps build SPAs, where the page doesn’t reload entirely, providing a smooth, app-like user experience.

5. Large Ecosystem and Community 
- React has many libraries, tools, and a strong community, making development faster and supported.

### What is a Framework?

- A framework is a structured and predefined software platform that provides a foundation for building applications. It defines the overall architecture, rules, and flow of control, and your code fits into that structure.

Examples of Frameworks
 - Angular (JavaScript—frontend)
 - Next.js (React-based full-stack framework)
 - Django (Python—backend)
 - Laravel (PHP—backend)

### GSAP (GreenSock Animation Platform)

- GSAP is a high-performance JavaScript animation library used to create smooth, professional-grade animations for web applications. It provides powerful tools to animate HTML elements, CSS properties, SVG, canvas objects, and more with precise control and excellent performance.

-> [GSAP CDN](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js)

### React.js  CDN & there use : 

1. React Core Library - This script imports the core React library, responsible for defining components, managing state, and handling the virtual DOM.

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

** Use / Purpose
 - This file provides the React core library.
 - It contains:
    - The React API (e.g., React.createElement, useState, etc.)
    - The logic for components
    - The Virtual DOM system
    - Hooks, states, props handling
 - It is the main brain of React — without this, React code cannot run.


2. ReactDOM Library - This script imports the ReactDOM library, which connects React components to the actual browser DOM, enabling them to be displayed on the webpage.

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Use / Purpose
- This file provides ReactDOM, which allows React to interact with the real DOM.

- It contains:
  - Methods like ReactDOM.createRoot()
  - Rendering components into HTML elements
  - Updating the actual DOM efficiently
