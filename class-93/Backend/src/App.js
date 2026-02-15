const express = require("express");
const NoteModel = require("./models/notes.model");
const cors = require("cors");

const App = express();
App.use(cors())
App.use(express.json())

App.post("/Notes", async (req, res) => {
    const { Title, Description } = req.body;
    const Note = await NoteModel.create({
        Title, Description
    });
    res.status(201).json({
        message: "Note Post successfully",
        Note
    });
});

App.get("/Notes", async (req, res)=>{
    const Notes = await NoteModel.find()

    res.status(200).json({
        message: "Note save successfully",
        Notes
    });
});

App.delete("/Notes/:id", async (req,res)=>{
    const id = req.params.id;

    await NoteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note delete successfully",
    })
})

App.patch("/Notes/:id", async (req,res)=>{
    const id = req.params.id;
    const {Description} = req.body

    await NoteModel.findByIdAndUpdate(id,{Description})

    res.status(200).json({
        message: "Note update successfully",
    })
})


module.exports = App;

