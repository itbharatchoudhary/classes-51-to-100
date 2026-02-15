const express = require('express');

const App = express();
App.use(express.json());

const notes =[
    // {
    //     title:"My first note",
    //     content:"This is the content of my first note."
    // }
 ]

App.get('/', (req, res) => {
  res.send('Welcome to the Notes API');
});

App.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    res.send('Note created successfully');
});

App.get('/notes', (req, res) => {
  res.json(notes);
});

App.delete('/notes/:id', (req, res) => {
    delete notes[req.params.id];
    res.send('Delete note endpoint');
});

App.patch('/notes/:id', (req, res) => {
 notes[req.params.id].content = req.body.content;
    res.send('Update note endpoint');
});




module.exports = App;