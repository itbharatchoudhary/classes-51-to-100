const express = require("express");

const app = express();

app.use(express.json());

const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.send("note create Successfully");
});

app.get("/notes",(req,res)=>{
    res.send(notes);
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note delete Successfully");
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].Title = req.body.Title;
    res.send("note update Successfully");
})

module.exports = app;