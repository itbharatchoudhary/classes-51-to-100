# JavaScript, Node.js, and Express (Beginner Explanation)

## 1. How to Run JavaScript Outside the Browser

- Normally, JavaScript runs inside a web browser like Chrome or Firefox. To run JavaScript outside the browser, we use Node.js.

Node.js is a software that:

* Allows JavaScript to run on a computer or server
* Is used to create backend applications

### Example

To run a JavaScript file using Node.js: It means run on terminal 

```bash
node app.js
```

This command tells Node.js to execute the `app.js` file.

## 2. What Are Packages

- Packages are ready-made pieces of code written by other developers.

They help us:

* Save time
* Avoid writing the same code again and again

Some popular packages are:

* `express` – used to create servers
* `nodemon` – automatically restarts the server
* `mongoose` – works with databases

## 3. How to Install Packages

Node.js uses npm, which stands for Node Package Manager.

### Step 1: Initialize a Project

```bash
npm init -y
```

This command creates a `package.json` file for the project.

### Step 2: Install a Package

```bash
npm install express
```

This installs Express for the project.

### Step 3: Install a Development Package

```bash
npm install nodemon --save-dev
```

Development packages are used only while developing the project, not in production.

## 4. How to Use Packages

After installing a package, we can use it in our code using `require()` or `import`.

### Example

```js
const express = require("express");
```

Now, the features of Express can be used in the file.

## 5. What Is a Server

A server is a program that:

* Receives requests from users (clients)
* Processes those requests
* Sends back responses

Servers usually run on a port number, such as:

* 3000
* 5000
* 8000

## 6. Create a Server Using Express

### Step 1: Install Express

```bash
npm install express
```

### Step 2: Write Basic Server Code

```js
const express = require("express");

const app = express();

// server listen
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

This code:

* Creates a server
* Makes it listen on port 3000

### Step 3: Run the Server

```bash
node index.js
```

After running this command, the server starts working.

 
#  Practical Task: Create a Simple Backend Server

##  Task Objective
Create a simple server using Node.js and Express that runs outside the browser and uses npm packages.

##  Task Requirements
You must do all the following steps:

##  Step 1: Create Project Folder

1. Create a new folder named:

   ```
   practice
   ```
2. Open the folder in VS Code
3. Open terminal inside the folder

##  Step 2: Initialize Node Project

Run this command:

```bash
npm init -y
```

- This should create a `package.json` file.

## Step 3: Install Packages

### Install Express:

```bash
npm install express
```

### Install Nodemon as Dev Dependency:

```bash
npm install nodemon --save-dev
```

- This covers packages and npm.

##  Step 4: Create Server File

1. Create a file named:

   ```
   index.js
   ```

2. Write this code inside it:

```js
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

- This creates a server and runs it on port 3000.

##  Step 5: Run JavaScript Outside Browser

Run the server using Node.js:

```bash
node index.js
```

- This proves JavaScript is running outside the browser.

##  Step 6:  Use Nodemon

Edit `package.json` and add this inside `"scripts"`:

```json
"scripts": {
  "start": "nodemon index.js"
}
```

Now run:

```bash
npm start
```
 Server should restart automatically when you save changes.

##  Final Folder Structure

```
practice
│
├── node_modules
├── package.json
├── package-lock.json
└── index.js
```

##  Output You Should See

In terminal:

```
Server is running on port 3000
```
