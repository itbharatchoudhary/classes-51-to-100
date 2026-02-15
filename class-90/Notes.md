# Installation of Mongodb compass

## What is MongoDB Compass?

MongoDB Compass is a software (app) that lets you see and manage your MongoDB database visually.
---

## Step 1: Open the MongoDB website

1. Open Google Chrome
2. Type this in the address bar and press Enter
   -> [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)


## Step 2: Choose your operating system

You will see a download page.

1. Under Platform, select:

   * Windows (if you use Windows)
   * macOS (if you use Mac)
   * Linux (if you use Linux)
2. Under Package, keep the default option (recommended)

👉 For beginners on Windows:
Choose Windows (64-bit)

---

## Step 3: Download MongoDB Compass

1. Click the Download button
2. Wait for the file to download (1–2 minutes)

The file name will look like:

```
mongodb-compass-xxx.exe
```

---

## Step 4: Install MongoDB Compass (Windows)

1. Go to your Downloads folder
2. Double-click the downloaded `.exe` file
3. Click Yes if Windows asks permission
4. Follow the setup:

   * Click Next
   * Accept the License Agreement*
   * Click Next
   * Click Install
5. Wait for installation to finish
6. Click Finish

-> MongoDB Compass is now installed

---

## Step 5: Open MongoDB Compass

1. Press Windows key
2. Type MongoDB Compass
3. Click on MongoDB Compass

The app will open 

---

## Step 6: Connect to a Database 

When Compass opens, you will see a connection screen.

### If you are using MongoDB Atlas (online database):

1. Copy your MongoDB connection string
   (starts with `mongodb+srv://`)
2. Paste it into the URI box
3. Click Connect

### If you are using local MongoDB:

Use this and click Connect:

```
mongodb://localhost:27017
```

---

## Step 7: You’re done 

Now you can:

* See databases
* See collections
* Add data
* Delete data
* Learn MongoDB visually

---

# MongoDB Atlas 

## What is MongoDB Atlas?

MongoDB Atlas is an online MongoDB database that runs on the internet.
You can connect it with:

* MongoDB Compass
* Node.js
* Express
* Any app

---

## Step 1: Open MongoDB Atlas website

1. Open Google Chrome
2. Go to this link:
   -> [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)

---

## Step 2: Create a free account

1. Click Sign Up
2. Choose one option:

   * Sign up with Google (easy)
   * Or sign up with Email

Fill:

* Email
* Password
* Click Create Account

-> Account created

---

## Step 3: Create a Free Cluster

After login, Atlas will ask to Create a Cluster.

1. Choose FREE option → M0 (Free Tier)
2. Cloud Provider: keep AWS
3. Region: choose Mumbai (best for India 🇮🇳)
4. Cluster Name: keep default or type anything
5. Click Create Cluster

-> Wait 1–3 minutes
Atlas is preparing your database

---

## Step 4: Create Database User 

Atlas will ask you to create a username & password.

1. Username: example

   ```
   admin
   ```
2. Password: create a strong password
   (save it somewhere!)
3. Click Create User

-> This is NOT your email password
This is for database connection

---

## Step 5: Allow Network Access (IP Address)

Now Atlas will ask: Who can connect to this database?

1. Click Add IP Address
2. Click Allow Access from Anywhere

   ```
   0.0.0.0/0
   ```
3. Click Confirm

-> This allows Compass & Node.js to connect

---

## Step 6: Get Connection String

1. Click Connect on your cluster
2. Choose Connect using MongoDB Compass
3. Copy the connection string

It looks like this:

```
mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/
```

4. Replace `<password>` with your real password

Example:

```
mongodb+srv://admin:12345@cluster0.xxxxx.mongodb.net/test
```

---

## Step 7: Connect Atlas with MongoDB Compass

1. Open MongoDB Compass
2. Paste the connection string
3. Click Connect

-> DONE!
MongoDB Atlas is now connected

---

## What you can do now

* Create database
* Create collection
* Insert data
* Connect Atlas to Node.js / Express

---

# Node.js backend server
## PART 1: What are we even building?

You are building a Node.js backend server that:

1. Runs using Express
2. Connects to a MongoDB database stored on the cloud (MongoDB Atlas)
3. Uses Mongoose to talk to MongoDB

Think of it like this:

```
Your App (Node + Express)
        |
        |  (via Mongoose)
        v
MongoDB Atlas (Cloud Database)
```

MongoDB Compass is just a GUI tool to see the database visually.

---

## PART 2: Creating a MongoDB Atlas account (Free)

### Step 1: Sign up

1. Go to -> [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Click Sign Up
3. Use Google / Email
4. Finish signup

---

## PART 3: Create a FREE Cluster

### Step 1: Create a project

* After login, Atlas asks for a Project Name
* Example: `class-90`
* Click Create Project

### Step 2: Create a Cluster

1. Click Build a Database
2. Choose M0 (FREE)
3. Cloud Provider: AWS
4. Region: Default
5. Cluster Name: keep default or rename
6. Click Create

-> It takes ~2–3 minutes to create

---

## PART 4: Create Database User (Username & Password)

This is like login credentials for your database.

1. Go to Database Access
2. Click Add New Database User
3. Choose:

   * Authentication: Password
   * Username: `Bharat`
   * Password: generate or type one
4. Database User Privileges:

   * Choose Read and write to any database
5. Click Add User

-> This username & password is what you used in your code.

---

## PART 5: Allow Your IP Address 

MongoDB blocks unknown IPs for security.

1. Go to Network Access
2. Click Add IP Address
3. Choose Allow Access from Anywhere

   * It adds `0.0.0.0/0`
4. Click Confirm

-
-> Now your local computer can connect.

---

## PART 6: Connect MongoDB Compass

### Step 1: Install Compass

* Download from -> [https://www.mongodb.com/products/tools/compass](https://www.mongodb.com/products/tools/compass)
* Install it

### Step 2: Get Connection String

1. In Atlas → Go to Clusters
2. Click Connect
3. Choose Connect using MongoDB Compass
4. Copy the connection string

It looks like:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
```

Replace:

* `<username>` → Bharat
* `<password>` → your password

### Step 3: Paste into Compass

* Open Compass
* Paste the string
* Click Connect

-> You’ll see databases visually!

---

## PART 7: Folder Structure (Your Project)

A clean structure looks like this:

```
project-folder/
│
├── server.js
├── package.json
│
└── src/
    └── App.js
```

---

## PART 8: Understanding App.js

### Your code:

```js
const express = require("express");
```
> Import the Express framework so I can build a server.

---

```js
const App = express();
```

> Create an Express application (your server brain).

Think of `App` as the server itself.

---

```js
module.exports = App;
```

> Allow other files to use this App.

So `server.js` can import it.

---

## PART 9: Understanding server.js (Very Important)

### Your code:

```js
const App = require('./src/App.js');
```

> Import the Express app from App.js

---

```js
const mongoose = require('mongoose');
```

> Import Mongoose (tool to talk to MongoDB)

---

### Database Connection Function

```js
function connectedToDB() {
    mongoose.connect("mongodb+srv://Bharat:ufIVgxImuJveDPlf@cluster0.ax77efh.mongodb.net/class-90")
        .then(() => {
            console.log('Connected to Database');
        });
};
```

* `mongoose.connect()` → connects Node.js to MongoDB Atlas
* The URL contains:

  * Username
  * Password
  * Cluster address
  * Database name (`class-90`)

When connection is successful:

```
Connected to Database
```

prints in terminal.

---

```js
connectedToDB();
```

> Call the function to actually connect.

---

### Starting the Server

```js
App.listen(3000, () => {
    console.log("server is connected!");
});
```

> Start the server on port 3000
> When server starts, print a message

So when you run:

```
node server.js
```

You see:

```
Connected to Database
server is connected!
```

->  That means everything worked.

