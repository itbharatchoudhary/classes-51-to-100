# Chapter 1: Programming a Server to Respond to Users

## 1. What Is a Server?

A server is a computer program that performs three main tasks:

1. Waits for requests from users (such as a browser, mobile app, or API)
2. Processes those requests
3. Sends a response back to the user

### Real-Life Example (Restaurant Analogy)

| Real Life | Web Development |
| --------- | --------------- |
| Customer  | User (Client)   |
| Order     | Request         |
| Kitchen   | Server          |
| Food      | Response        |

In web development:

* A browser sends a request to the server
* The server processes the request
* The server sends data (HTML, JSON, text, etc.) back to the browser

---

## 2. What Is Node.js?

Normally, JavaScript runs only inside a browser.

Node.js allows JavaScript to:

* Run on your computer or server
* Create backend servers
* Access files and folders
* Connect to databases

### Conclusion

> With Node.js, JavaScript becomes a backend programming language.

---

## 3. What Is Express.js?

Express.js is a framework built on top of Node.js.

It simplifies backend development by helping you:

* Create servers easily
* Handle routes like `/`, `/about`, `/api`
* Send responses quickly

### Comparison

| Without Express | With Express   |
| --------------- | -------------- |
| Complex code    | Simple code    |
| More setup      | Less setup     |
| Hard to manage  | Easy to manage |

> Express makes backend development faster, cleaner, and easier.

---

# Chapter 2: Installation 

## Step 1: Install Node.js

1. Go to  [https://nodejs.org](https://nodejs.org)
2. Download the LTS version
3. Install it

### Verify Installation

```bash
node -v
npm -v
```

If version numbers appear, Node.js is installed correctly.

---

## Step 2: Create a Project Folder

```bash
mkdir project-name
cd project-name
```

* `mkdir` creates a folder
* `cd` enters the folder

---

## Step 3: Initialize a Node Project

```bash
npm init -y
```

This command creates a package.json file.

### package.json stores:

* Project information
* Installed dependencies
* Scripts

---

## Step 4: Install Express

```bash
npm install express
```

This command:

* Downloads Express
* Creates a `node_modules` folder
* Adds Express to `package.json`

---

# Chapter 3: Basic Express Server 

## Full Code

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

---

### Line 1

```js
const express = require('express');
```


* Imports the Express library
* `require()` loads external packages in Node.js

> This line makes Express features available in the program.

---

### Line 2

```js
const app = express();
```



* Creates an Express application
* `app` represents the server

> This line initializes the server.

---

### Line 3

```js
app.get('/', (req, res) => {
```


* Handles HTTP GET requests
* `'/'` is the home route
* Runs when the user opens `http://localhost:3000/`

-> Parameters:

* `req` → request sent by the user
* `res` → response sent by the server

---

### Line 4

```js
res.send('Hello World!');
```


* Sends text as a response
* The browser displays Hello World!

---

### Line 5

```js
});
```


* Ends the route function

---

### Line 6

```js
app.listen(3000, () => {
```

* Starts the server
* Listens on port 3000

---

### Line 7

```js
console.log('Server is running on port 3000');
```


* Displays a message in the terminal
* Confirms the server is running

---

### Line 8

```js
});
```


* Ends the `listen` function

---

# Chapter 4: Running the Server

## Step 1: Create a File

```bash
index.js
```

## Step 2: Paste the Server Code

## Step 3: Run the Server

```bash
node index.js
```

## Step 4: Open Browser

```
http://localhost:3000
```

### Output

```
Hello World!
```

---

# Chapter 5: Understanding `node` and `nodemon`

## 1. `node index.js`

### Meaning

Runs a JavaScript file using Node.js.

### Process

1. Node.js opens `index.js`
2. Reads the file
3. Executes the code

### Important Point

> You must restart the server manually after every change.

---

## 2. `nodemon index.js`

### Meaning

Runs the server and automatically restarts it when files change.

### Why Use nodemon?

* Saves time
* No manual restart
* Best for development

---

# Chapter 6: Difference Between `npm` and `npx`

## npm (Node Package Manager)

Used for:

* Installing packages
* Managing dependencies

### Examples

```bash
npm install express
npm install -g nodemon
npm start
```

> npm = install and manage packages

---

## npx (Node Package Execute)

**Used for:**

* Running packages without installing them globally

### Example

```bash
npx create-react-app myApp
```

> npx = run packages directly

---

### Comparison Table

| Feature          | npm          | npx        |
| ---------------- | ------------ | ---------- |
| Install packages | Yes          | No         |
| Run packages     | Limited      | Yes        |
| Global install   | Often needed | Not needed |

---

# Chapter 7: What Is a Port?

A port is a communication endpoint (door) of a computer.

### Example

| Application | Port |
| ----------- | ---- |
| Node App    | 3000 |
| MySQL       | 3306 |
| HTTPS       | 443  |

---

## What Does Port 3000 Mean?

```js
app.listen(3000);
```

**Meaning:**

* Server listens on port 3000
* Accessed via `http://localhost:3000`

---

# Chapter 8: Deployment (Basic Understanding)

## What Is Deployment?

Deployment means making your application available on the internet.

Without deployment:

* Only you can access the project

With deployment:

* Anyone can access it using a URL

---

## Why Deployment Is Needed

* Share projects
* Build a portfolio
* Allow real users to use the app
* Keep backend running 24/7

---

## Common Deployment Platforms

| Platform | Best For                  |
| -------- | ------------------------- |
| Vercel   | Frontend (React, Next.js) |
| Netlify  | Static sites              |
| Render   | Backend (Node.js)         |
| Railway  | Full-stack apps           |
| AWS      | Professional use          |

> Best for beginners: Vercel + Render

---

## Basic Deployment Flow

1. Build project locally
2. Push code to GitHub
3. Choose deployment platform
4. Connect GitHub repository
5. Platform builds the project
6. Server runs online
7. Platform provides live URL

---

## Frontend vs Backend Deployment

| Type     | Runs On | Platform         |
| -------- | ------- | ---------------- |
| Frontend | Browser | Vercel / Netlify |
| Backend  | Server  | Render / Railway |



#  What is Render.com?

Render is a cloud platform that:

* Hosts your backend (Node / Express)
* Hosts frontend (React, Vite, static sites)
* Gives you a live URL
* Handles deployment automatically

Think of it as:

> “Put my project on the internet so anyone can open it.”

---

#  Before Deployment 

You MUST have:

1. A working project on your computer
2. Project uploaded to GitHub
3. `package.json` present
4. App runs locally without errors

---

#  STEP 1: Create Render Account

1. Go to -> [https://render.com](https://render.com)
2. Click Get Started
3. Sign up using:

   * GitHub (recommended )
   * Google / Email

-> Using GitHub is best because Render connects directly to your repo.

---

#  STEP 2: Push Your Code to GitHub

If not already done:

```bash
git init
git add .
git commit -m "first deploy"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

 Your project must be on GitHub before Render can deploy it.

---

# 🔹 STEP 3: Choose What You’re Deploying

Render supports:

* Static Site → React build, HTML, CSS
* Web Service → Node / Express backend
* Full-stack → frontend + backend (separate services)

Most common:

* React → Static Site
* Express → Web Service

---

#  STEP 4: Deploy Frontend (React / Vite)

### 1 Click New +

### 2 Choose Static Site

### 3 Connect GitHub repo

### 4 Select your repository

---

### Fill Deployment Details

-> Build Command

```bash
npm install && npm run build
```

Publish Directory

* For Vite:

```text
dist
```

* For CRA:

```text
build
```

Click Create Static Site 

---

#  STEP 5: Deploy Backend (Node / Express)

### 1 Click New +

### 1 Choose Web Service

### 1 Select GitHub repo

---

### Important Settings

Start Command

```bash
node index.js
```

or

```bash
npm start
```

Environment

* Node

Port
Render automatically provides `process.env.PORT`

So your code must use:

```js
app.listen(process.env.PORT || 3000)
```

-> This is REQUIRED.

---

# 🔹 STEP 6: Environment Variables (If Needed)

If you use:

* MongoDB
* API keys

Go to:
Settings → Environment Variables

Example:

```
MONGO_URI = your_url
```

---

#  STEP 7: Deployment Process

After clicking deploy:

* Render installs dependencies
* Builds project
* Starts server
* Gives you a URL like:

```
https://your-app.onrender.com
```

-> Your website is LIVE.

#  Test After Deployment

* Open Render URL
* Test routes in browser / Postman
* Check Logs if error occurs



## 1. What is Postman? (Quick context)

Postman is a tool used by developers to:

* Send requests to servers (APIs)
* Test backend routes (GET, POST, PUT, DELETE)
* See responses without writing frontend code

Think of it as a remote control for your server.

---

## 2. System Requirements 

* Internet connection
* A normal PC/laptop (nothing special)


## 3. Open the Official Website

1. Open any browser (Chrome, Edge, Firefox)
2. Go to -> [https://www.postman.com](https://www.postman.com)

- Always use the official site to avoid fake or outdated versions.

---

## 4. Download Postman (Desktop App)

### Step 1: Click Download

* On the homepage, click Download the App
* The website will automatically detect your OS

### Step 2: Choose Your OS (if needed)

You may see options like:

* Windows (64-bit)
* macOS (Intel / Apple Silicon)
* Linux (Snap / Tar / Deb)

Click the correct one for your system.

---

## 5. Install Postman 

###  Windows Installation

1. File downloaded: `Postman-win64-Setup.exe`
2. Double-click the file
3. Installation starts automatically
4. No setup wizard needed
5. Postman opens when done 

-> Installed location is handled automatically.

---

###  macOS Installation

1. File downloaded: `Postman.dmg`
2. Open the `.dmg` file
3. Drag Postman*into Applications folder
4. Open Postman from Applications

-> First time macOS may warn:

> “App downloaded from internet”
> → Click Open

---

###  Linux Installation (Simple Way – Snap)

```bash
sudo snap install postman
```

Then run:

```bash
postman
```

---

## 6. First Launch & Login

When Postman opens:

### Option 1: Sign in (Recommended)

* Use Google / GitHub / Email
* Benefits:

  * Sync collections
  * Save work online

### Option 2: Skip Login

* Click Skip and go to the app
* You can still use all core features

---

## 7. Postman Interface Overview 

Once inside, you’ll see:

* New Tab → Create request
* URL Bar → Enter API URL
* Methods → GET, POST, PUT, DELETE
* Send Button → Send request
* Response Area → See output from server

Example:

```
GET http://localhost:3000
```

---

## 8. Test Installation 

Try this public test API:

1. Method: GET
2. URL:

```
https://jsonplaceholder.typicode.com/posts
```

3. Click Send

If you see JSON data →  Postman installed correctly

---

## 9. Why Developers Use Postman

* No frontend needed
* Test APIs faster
* Debug backend issues
* Learn how servers work
* Industry-standard tool

Perfect for:

* Node.js
* Express
* REST APIs
* Backend learning
