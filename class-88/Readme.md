# Learning Which File You Use for What

Backend projects (especially Node.js + Express) mein hum commonly code ko organize karne ke liye **multiple files** use karte hain. Isse code maintainable, scalable aur readable ban jata hai.

---

## Why We Use `server.js`

`server.js` ka main purpose hota hai **application ko start karna**.

### Responsibilities:

* Server ko **listen mode** me lana (start karna)
* Port define karna
* Entry point ke roop me kaam karna

### Example:

```id="3vx7p9"
const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Explanation:

* `server.js` sirf ek kaam karta hai → **server ko run karna**
* Ye file application ka **starting point (entry file)** hoti hai

---

## Why We Use `app.js`

`app.js` ka main role hota hai **server ko create aur configure karna**.

### Responsibilities:

* Express app initialize karna
* Middleware setup karna
* Routes define karna
* Global configurations handle karna

### Example:

```id="hcbkhn"
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

module.exports = app;
```

### Explanation:

* `app.js` me actual **application logic aur configuration hoti hai**
* Ye file server ko directly start nahi karti
* Sirf ek configured app return karti hai


---


# Notes API – Express Server Explanation

Ye code ek simple **REST API** create karta hai using **Express.js**, jahan hum notes ko **create, read, update, delete (CRUD operations)** kar sakte hain.

---

## 1. Importing and Initializing Express

```javascript
const express = require("express");
const app = express();
```

### Explanation:

* `express` ek Node.js framework hai jo server banana easy karta hai
* `app` ek Express application instance hai jisme hum routes aur middleware define karte hain

---

## 2. Middleware Setup

```javascript
app.use(express.json());
```

### Explanation:

* Ye middleware incoming request body ko **JSON format me parse** karta hai
* Agar client JSON data bhejta hai, to wo `req.body` me accessible hota hai

---

## 3. Data Storage

```javascript
const notes = [];
```

### Explanation:

* Ye ek **in-memory array** hai jisme notes store ho rahe hain
* Data temporary hai → server restart hone par delete ho jayega

---

## 4. Create Note (POST /notes)

```javascript
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.send("note create Successfully");
});
```

### Explanation:

* Ye route ek new note create karta hai
* Client se data `req.body` me aata hai
* Us data ko `notes` array me push kar diya jata hai

### Flow:

Client → POST `/notes` → Data send → Server → Store in array

---

## 5. Get All Notes (GET /notes)

```javascript
app.get("/notes",(req,res)=>{
    res.send(notes);
})
```

### Explanation:

* Ye route sare notes return karta hai
* Response me pura `notes` array send hota hai

---

## 6. Delete Note (DELETE /notes/:index)

```javascript
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note delete Successfully");
})
```

### Explanation:

* `:index` ek **route parameter** hai
* Ye specific index ka note delete karta hai

### Important Note:

* `delete` operator array element ko remove nahi karta, sirf usko `undefined` bana deta hai
* Better approach: `splice()` use karna

Example:

```javascript
notes.splice(req.params.index, 1);
```

---

## 7. Update Note (PATCH /notes/:index)

```javascript
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].Title = req.body.Title;
    res.send("note update Successfully");
})
```

### Explanation:

* Ye route existing note ko update karta hai
* Specific index pe jo note hai uska `Title` update hota hai

### Important Note:

* Ye assume karta hai ki note object me `Title` property already exist karti hai
* Validation nahi hai (agar index galat ho ya data missing ho)

---

## 8. Exporting the App

```javascript
module.exports = app;
```

### Explanation:

* Ye `app` ko export karta hai taaki dusri file (jaise `server.js`) me use ho sake
* Ye separation **modular architecture** follow karta hai

---

## API Summary

| Method | Endpoint      | Description     |
| ------ | ------------- | --------------- |
| POST   | /notes        | Create new note |
| GET    | /notes        | Get all notes   |
| DELETE | /notes/:index | Delete a note   |
| PATCH  | /notes/:index | Update a note   |

---

## Limitations (Professional Insight)

* Data persistent nahi hai (restart → data lost)
* Validation missing hai
* Error handling nahi hai
* Index-based operations unsafe ho sakte hain
