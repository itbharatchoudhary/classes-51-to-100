# Understanding REST APIs

## 1. Introduction to REST

REST (Representational State Transfer) ek architectural style hai jo web services design karne ke liye use hota hai. Yeh lightweight, scalable aur simple communication pattern provide karta hai between client (frontend/app) aur server (backend).

REST APIs HTTP protocol ka use karti hain aur resources ko access aur manipulate karne ka standard way deti hain.

---

## 2. Core Principles of REST

### 2.1 Resources

Resource ka matlab hota hai koi bhi data ya object jo server pe available ho.
Example:

* User
* Product
* Order

Har resource ko ek unique URL (endpoint) se identify kiya jata hai.

Example:

```
/users
/products/101
```

---

### 2.2 Resource Representations

Client aur server ke beech jo data exchange hota hai usse representation kehte hain.

Common formats:

* JSON (most used)
* XML

Example (JSON):

```json
{
  "id": 1,
  "name": "Bharat"
}
```

---

### 2.3 Stateless Communication

REST APIs stateless hoti hain, iska matlab:

* Server client ka previous request ya state store nahi karta
* Har request me complete information honi chahiye

Example:
Har API request me authentication token bhejna padega.

---

### 2.4 Client–Server Architecture

Client aur server alag-alag hote hain:

* Client: UI handle karta hai (React, Angular, etc.)
* Server: Data aur business logic handle karta hai

Isse scalability aur flexibility improve hoti hai.

---

### 2.5 HTTP Methods

REST APIs me HTTP methods ka use hota hai actions define karne ke liye:

| Method | Use Case                           |
| ------ | ---------------------------------- |
| GET    | Data fetch karna                   |
| POST   | Naya resource create karna         |
| PUT    | Resource update (complete replace) |
| PATCH  | Partial update                     |
| DELETE | Resource delete karna              |

---

### 2.6 HTTP Status Codes

Server response ke sath status code return karta hai jo batata hai request ka result kya hai.

Example:

* 200 → Success
* 404 → Not Found
* 500 → Server Error

---

## 3. HTTP Methods in REST APIs

### 3.1 Important Method Concepts

#### Idempotence

Idempotent method ka matlab:
Agar same request multiple times call karein, result same hi rahega.

Idempotent methods:

* GET
* PUT
* DELETE

Example:
DELETE request 10 baar bhi call karo → result same (resource deleted hi rahega)

---

#### Safe Methods

Safe methods wo hote hain jo server ke data ko change nahi karte.

Safe methods:

* GET

Example:
GET request sirf data fetch karega, modify nahi karega.

---

## 4. HTTP Status Codes

### 4.1 Status Code Categories

| Range | Meaning       |
| ----- | ------------- |
| 1xx   | Informational |
| 2xx   | Success       |
| 3xx   | Redirection   |
| 4xx   | Client Error  |
| 5xx   | Server Error  |

---

### 4.2 Common HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK (Success)          |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## 5. RESTful API Design Best Practices

* Use proper HTTP methods (GET, POST, PUT, DELETE)
* URLs clean aur meaningful hone chahiye
  Example:

  ```
  /users/1/orders
  ```
* Always use nouns, verbs nahi
  Wrong: `/getUsers`
  Correct: `/users`
* Use versioning
  Example:

  ```
  /api/v1/users
  ```
* Proper status codes return karo
* Pagination use karo large data ke liye
* Secure APIs using authentication (JWT, OAuth)

---

## 6. Error Handling in REST APIs

Proper error handling API ka important part hai.

### Best Practices:

1. Meaningful error messages return karo
2. Correct status codes use karo
3. Consistent error format follow karo

Example:

```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "User ID is required"
}
```

### Common Errors:

* Validation errors
* Authentication errors
* Server errors

