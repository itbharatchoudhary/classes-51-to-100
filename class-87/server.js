const express = require("express");

const app = express();

app.use(express.json());

const notes = []

app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.send("Notes Create successfully");
})

app.get("/notes", (req, res) => {
    res.send(notes);
})

app.listen(3000, (req, res) => {
    console.log("Server running successfully");
});

