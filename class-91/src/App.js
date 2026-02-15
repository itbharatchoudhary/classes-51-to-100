const express = require('express');
const NoteModel = require("./models/notes.model.js");

const App = express();

App.use(express.json())


App.post("/Notes", async (req, res) => {
    const { Title, Description } = req.body
    const Note = await NoteModel.create({
        Title, Description
    })

    res.status(201).json({
        message: "Note create successfully",
        Note
    })

})

App.get("/Notes", async (req, res) => {
    const Notes = await NoteModel.find()

    res.status(200).json({
        message: "Notes is fetched successfully",
        Notes
    })
})

module.exports = App;

