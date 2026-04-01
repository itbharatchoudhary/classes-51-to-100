
# Programming a Server to Respond to Users

## What Is a Server?

Server ek aisa system ya software hota hai jo **client (user/browser/app)** se request receive karta hai aur uska response return karta hai.

Simple words mein:

* User request bhejta hai (jaise browser me URL hit karna)
* Server us request ko process karta hai
* Phir response bhejta hai (HTML page, JSON data, etc.)

Example flow:

```
Client (Browser) → Request → Server → Response → Client
```

Node.js mein hum server create karte hain jo HTTP requests handle karta hai.

---

## Understanding `node` and `nodemon`

### `node`

`node` ek runtime environment hai jo JavaScript ko **browser ke bahar run karne** allow karta hai.

Use case:

* Server run karna
* Backend logic execute karna

Example:

```
node index.js
```

Is command se aapka JavaScript file run hota hai.

---

### `nodemon`

`nodemon` ek development tool hai jo automatically server restart karta hai jab bhi aap code me changes karte ho.

Why use nodemon:

* Har baar manually server restart karne ki zarurat nahi hoti
* Development fast ho jata hai

Example:

```
nodemon index.js
```

Difference:

* `node` → manually run aur restart
* `nodemon` → auto restart on file changes

---

## Difference Between `npm` and `npx`

### `npm` (Node Package Manager)

`npm` ka use hota hai:

* Packages install karne ke liye
* Dependencies manage karne ke liye

Example:

```
npm install express
```

Ye package ko project me install karta hai.

---

### `npx`

`npx` ka use hota hai:

* Kisi package ko **without installing globally** directly run karne ke liye

Example:

```
npx create-react-app my-app
```

Isme aapko package install karne ki zarurat nahi hoti, wo temporarily run hota hai.

---

### Key Difference

| Feature      | npm                   | npx                          |
| ------------ | --------------------- | ---------------------------- |
| Purpose      | Install packages      | Execute packages             |
| Installation | Required              | Not required (temporary use) |
| Usage        | Dependency management | One-time execution           |

---

## What Is a Port?

Port ek **numeric identifier** hota hai jo server pe specific service ko identify karta hai.

Simple samajh:

* Server ek building hai
* Port ek room number hai

Example:

```
http://localhost:3000
```

Yahan:

* `localhost` → server
* `3000` → port number

---

### Important Points:

* Har application ek unique port pe run hoti hai
* Common ports:

  * 3000 → development servers
  * 5000 → APIs
  * 80 → HTTP
  * 443 → HTTPS
