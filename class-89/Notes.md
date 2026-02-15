# Chapter: Building and Testing a REST API using Express.js and Postman

## 1. Introduction to Express.js

- Express.js is a lightweight and flexible Node.js web framework used to build web applications and RESTful APIs.
It provides simple methods to handle HTTP requests such as GET, POST, PATCH, and DELETE.

---

## 2. What is a REST API?

A REST API (Representational State Transfer Application Programming Interface) allows communication between a client and a server using HTTP methods.

### Common HTTP Methods:

| Method | Purpose              |
| ------ | -------------------- |
| GET    | Retrieve data        |
| POST   | Create new data      |
| PATCH  | Update existing data |
| DELETE | Remove data          |

---

## 3. Explanation of `App.js`

### 3.1 Importing Express

```js
const express = require("express");
```

This statement imports the Express framework into the application.

---

### 3.2 Creating an Express Application

```js
const App = express();
```

This creates an Express application instance named `App`.

---

### 3.3 Middleware for JSON Parsing

```js
App.use(express.json());
```

This middleware allows the server to read JSON data sent in the request body.

---

### 3.4 In-Memory Data Storage

```js
const notes = [];
```

This array stores notes temporarily in memory.
Data will be lost when the server restarts.

---

## 4. API Routes Explanation

---

### 4.1 POST `/notes` – Create a Note

```js
App.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({message:"notes added successfully"});
});
```

Explanation:

* Accepts data from the client
* Adds the note to the `notes` array
* Returns status 201 (Created)

-> Use Case: Add a new note

---

### 4.2 GET `/notes` – Retrieve All Notes

```js
App.get("/notes",(req,res)=>{
    res.status(200).json(notes);
});
```

Explanation:

* Fetches all notes
* Returns status 200 (OK)

->Use Case: View all saved notes

---

### 4.3 DELETE `/notes/:id` – Delete a Note

```js
App.delete("/notes/:id",(req,res)=>{
   delete notes[req.params.id];
   res.status(204).json({message:"note deleted successfully"});
});
```

Explanation:

* Deletes a note by index (`id`)
* Status 204 (No Content) means successful deletion

->Use Case: Remove a note

---

### 4.4 PATCH `/notes/:id` – Update a Note

```js
App.patch("/notes/:id",(req,res)=>{
   notes[req.params.id].title = req.body.title;
   notes[req.params.id].content = req.body.content;

   res.status(200).json({message:"note updated successfully"});
});
```

Explanation:

* Updates title and content of a note
* Uses PATCH for partial updates
* Returns status **200 (OK)**

-> Use Case: Edit a note

---

## 5. Explanation of `Server.js`

```js
const App = require("./src/App.js");

App.listen(3000,()=>{
    console.log("server is running on port 3000");
});
```

Explanation:

* Imports the Express application
* Starts the server on port 3000
* Listens for incoming HTTP requests

---

## 6. Testing the API Using Postman

### 6.1 Start the Server

```bash
node server.js
```

---

### 6.2 POST Request – Add Note

* Method: POST
* URL: `http://localhost:3000/notes`
* Body → raw → JSON:

```json
{
  "title": "My First Note",
  "content": "Learning Express REST API"
}
```

---

### 6.3 GET Request – View Notes

* Method: GET
* URL: `http://localhost:3000/notes`

---

### 6.4 PATCH Request – Update Note

* Method: PATCH
* URL: `http://localhost:3000/notes/0`
* Body:

```json
{
  "title": "Updated Note",
  "content": "Express API updated"
}
```

---

### 6.5 DELETE Request – Delete Note

* Method: DELETE
* URL: `http://localhost:3000/notes/0`

