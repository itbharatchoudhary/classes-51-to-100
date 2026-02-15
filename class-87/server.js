const express = require('express');
const app = express();
app.use(express.json());
const notes = [];

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.post('/notes', (req,res)=>{

    console.log(req.body);

    notes.push(req.body);

    res.send('Note Successfully Added!');
});

app.get('/notes', (req,res)=>{
    res.send(notes);
});

app.listen(3000,()=>{
    console.log('server is runing now on port 3000');
})