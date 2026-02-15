const express = require("express");

const App = express();

App.use(express.json());

const notes = [];

App.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({message:"notes added successfully"});
});

App.get("/notes",(req,res)=>{
    res.status(200).json(notes);
    notes : notes
});

App.delete("/notes/:id",(req,res)=>{
   delete notes[req.params.id];
   res.status(204).json({message:"note deleted successfully"});
});

App.patch("/notes/:id",(req,res)=>{
   notes[req.params.id].title = req.body.title;
      notes[req.params.id].content = req.body.content;

   res.status(200).json({message:"note updated successfully"});
});

module.exports = App;