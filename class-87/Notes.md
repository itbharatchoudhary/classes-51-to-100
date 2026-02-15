# Understanding REST APIs

## 1. Introduction to REST

REST (Representational State Transfer) is an architectural style used for designing scalable and maintainable networked applications. It is built on stateless, client–server communication and typically uses the HTTP protocol. RESTful systems emphasize simplicity, uniformity, and performance by relying on standard HTTP methods and status codes.

RESTful APIs are designed around resources, which may represent users, products, documents, orders, or any identifiable piece of data.

---

## 2. Core Principles of REST

### 2.1 Resources

A resource is any entity that can be accessed or manipulated via a REST API. Each resource is uniquely identified using a URI (Uniform Resource Identifier).

Example:

* `/users`
* `/products/123`

---

### 2.2 Resource Representations

Resources are transferred between client and server using standard data formats known as representations. The most commonly used formats are:

* JSON (most popular)
* XML

---

### 2.3 Stateless Communication

REST APIs are stateless, meaning:

* Each client request must contain all the information required to process it
* The server does not store any client session data

This improves scalability and reliability.

---

### 2.4 Client–Server Architecture

The client and server are independent of each other:

* The client handles the user interface
* The server manages data storage and business logic

This separation allows both to evolve independently.

---

### 2.5 HTTP Methods

REST APIs use standard HTTP methods to define operations on resources.

---

### 2.6 HTTP Status Codes

HTTP status codes communicate the result of a request, indicating whether it was successful, failed, or requires further action.

---

## 3. HTTP Methods in REST APIs

HTTP methods define what action should be performed on a resource.

| Method | Description                                                             | Idempotent |
| ------ | ----------------------------------------------------------------------- | ---------- |
| GET    | Retrieves a resource or list of resources. Does not modify server data. | Yes        |
| POST   | Creates a new resource using data in the request body.                  | No         |
| PUT    | Completely replaces an existing resource with new data.                 | Yes        |
| PATCH  | Partially updates an existing resource.                                 | Yes        |
| DELETE | Removes a resource from the server.                                     | Yes        |

---

### 3.1 Important Method Concepts

#### Idempotence

An idempotent method produces the same result whether it is called once or multiple times with the same request.

* Idempotent: GET, PUT, PATCH, DELETE
* Not Idempotent: POST

---

#### Safe Methods

A safe method does not modify server data.

* GET
* HEAD
* OPTIONS

---

## 4. HTTP Status Codes

HTTP status codes are three-digit numbers returned by the server to describe the outcome of a client request.

### 4.1 Status Code Categories

| Range | Category      | Meaning                                |
| ----- | ------------- | -------------------------------------- |
| 1xx   | Informational | Request received, processing continues |
| 2xx   | Success       | Request successfully processed         |
| 3xx   | Redirection   | Further action required                |
| 4xx   | Client Error  | Invalid client request                 |
| 5xx   | Server Error  | Server failed to process request       |

---

### 4.2 Common HTTP Status Codes

| Code | Description           | Typical Use Case             |
| ---- | --------------------- | ---------------------------- |
| 200  | OK                    | Successful GET request       |
| 201  | Created               | Successful POST request      |
| 204  | No Content            | Successful DELETE request    |
| 301  | Moved Permanently     | Redirect old URL to new one  |
| 302  | Found                 | Temporary redirect           |
| 304  | Not Modified          | Conditional GET optimization |
| 400  | Bad Request           | Invalid or malformed request |
| 401  | Unauthorized          | Authentication required      |
| 403  | Forbidden             | Access denied                |
| 404  | Not Found             | Resource does not exist      |
| 405  | Method Not Allowed    | Unsupported HTTP method      |
| 409  | Conflict              | Resource state conflict      |
| 422  | Unprocessable Entity  | Semantic validation error    |
| 500  | Internal Server Error | Generic server failure       |
| 501  | Not Implemented       | Operation not supported      |
| 503  | Service Unavailable   | Server overloaded or down    |

---

## 5. RESTful API Design Best Practices

* Use nouns to represent resources (`/users`, `/products`)
* Use plural nouns for collections (`/users`)
* Use HTTP methods according to their semantic meaning
* Always return appropriate HTTP status codes
* Keep APIs consistent and predictable
* Design stateless APIs
* Avoid exposing internal implementation details

---

## 6. Error Handling in REST APIs

Effective error handling improves debugging and user experience.

Best practices:

* Use correct HTTP status codes
* Return descriptive error messages (usually in JSON format)
* Log errors on the server for monitoring and debugging

- Answer:

* `400 Bad Request` → Invalid request data
* `404 Not Found` → Resource does not exist
* `500 Internal Server Error` → Unexpected server failure

---

## 7. Interview Questions and Answers

### Q1. What is a REST API?

- Answer:
A REST API follows the principles of Representational State Transfer and enables stateless client–server communication using standard HTTP methods and status codes. It is designed around resources and their representations.

---

### Q2. What HTTP methods are commonly used in REST APIs?

- Answer:

* GET – Retrieve data
* POST – Create data
* PUT – Replace data
* PATCH – Partially update data
* DELETE – Remove data

---

### Q3. Difference between PUT and PATCH?

- Answer:

* PUT replaces the entire resource
* PATCH updates only specific fields

---

### Q4. Why are HTTP status codes important?

- Answer:
They inform the client about the result of a request and help with debugging, error handling, and automation.

---

### Q5. Examples of common HTTP status codes?

- Answer:

* 200 OK – Success
* 201 Created – Resource created
* 400 Bad Request – Invalid request
* 401 Unauthorized – Authentication required
* 403 Forbidden – Permission denied
* 404 Not Found – Resource missing
* 500 Internal Server Error – Server failure

---

### Q6. What is idempotence?

- Answer:
An idempotent request yields the same result regardless of how many times it is executed.

Idempotent methods: GET, PUT, PATCH, DELETE

---

### Q7. What are safe HTTP methods?

- Answer:
Safe methods do not modify server data:

* GET
* HEAD
* OPTIONS

---

### Q8. Should APIs return error status codes on failure?

- Answer:

Yes. APIs must always return meaningful error status codes along with descriptive messages.

---

### Q9. Best practices for RESTful API design?

- Answer:

* Use nouns for resources
* Follow HTTP semantics
* Return proper status codes
* Maintain consistency
* Keep APIs stateless

---

### Q10. How should errors be handled in REST APIs?

- Answer:

* Use appropriate HTTP status codes
* Provide descriptive error responses
* Log server-side errors for debugging





## 1 Create Project Folder

Open Terminal / Command Prompt and run:

```bash
mkdir notes-server
cd notes-server
```

-> This creates a new folder for your backend project and moves into it.

---

## 2 Initialize Node Project

Run:

```bash
npm init -y
```

-> What this does:

* Creates a `package.json` file
* `-y` means “yes to all defaults”

You’ll now see:

```
notes-server/
 └── package.json
```

---

## 3 Install Express

Run:

```bash
npm i express
```

-> What this does:

* Installs Express.js (web server framework)
* Creates:

  * `node_modules/`
  * `package-lock.json`

---

## 4 Install Nodemon (for auto-restart)

Run:

```bash
npm i -D nodemon
```

-> Why nodemon?

* Automatically restarts the server when you change code
* Saves you from stopping & starting manually

---

## 5 Create Server File

Create a file:

```bash
server.js
```

Put this exact code inside it 

```js
const express = require('express');
const app = express();

app.use(express.json()); // allows JSON body

const notes = [];

// Home route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Add a note
app.post('/notes', (req, res) => {
    console.log(req.body);      // see data in terminal
    notes.push(req.body);       // store note in array
    res.send('Note Successfully Added!');
});

// Get all notes
app.get('/notes', (req, res) => {
    res.send(notes);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

---

## 6 Start Server Using Nodemon

Run:

```bash
npx nodemon server.js
```

You should see 

```
Server is running on port 3000
```

📌 Your server is now LIVE at:

```
http://localhost:3000
```

---

## 7 Test in Browser (GET /)

Open browser and go to:

```
http://localhost:3000
```

 Output:

```
Hello World!
```

---

##  Open Postman

###  Create a POST Request

* Method: POST
* URL:

  ```
  http://localhost:3000/notes
  ```

### Body Settings

* Click Body
* Select *raw
* Choose JSON

Paste this 

```json
{
  "title": "Learn Express",
  "content": "Express is easy"
}
```

### Click Send

-> Response:

```
Note Successfully Added!
```

 In terminal you’ll see:

```js
{ title: 'Learn Express', content: 'Express is easy' }
```

---

##  Get Notes (GET /notes)

In Postman:

* Method: GET
* URL:

  ```
  http://localhost:3000/notes
  ```

-> Click Send

 Response:

```json
[
  {
    "title": "Learn Express",
    "content": "Express is easy"
  }
]
```

---

## -> Add More Notes

Send another POST:

```json
{
  "title": "Postman",
  "content": "Used to test APIs"
}
```

GET `/notes` again ->

```json
[
  {
    "title": "Learn Express",
    "content": "Express is easy"
  },
  {
    "title": "Postman",
    "content": "Used to test APIs"
  }
]
```
