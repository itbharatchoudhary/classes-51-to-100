const express = require("express");

const app = express();   // server create ho jata hai

app.use(express.json());

const notes = []

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.send("Note create successfully")
})

app.get("/notes", (req, res) => {
    res.send(notes);
})

app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]
    res.send("Note delete successfully")
})

app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].Description = req.body.Description
    res.send("Note update successfully")
})

app.get("/", (req, res) => {
    res.send("hello world")
})


module.exports = app;