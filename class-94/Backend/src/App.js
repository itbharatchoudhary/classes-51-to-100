const express = require("express");
const NoteModel = require("./models/Notes.model");
const cors = require("cors");
const path = require("path");

const App = express();
App.use(cors());
App.use(express.json());
App.use(express.static("./public"));

// ----------------- Create Note -----------------
App.post("/Notes", async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = await NoteModel.create({ title, description });
    res.status(201).json({
      message: "Note created successfully",
      note
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------- Get All Notes -----------------
App.get("/Notes", async (req, res) => {
  try {
    const notes = await NoteModel.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      message: "Notes retrieved successfully",
      notes
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------- Delete Note -----------------
App.delete("/Notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await NoteModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------- Update Note -----------------
App.patch("/Notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedNote = await NoteModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

App.get('*name', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});





module.exports = App;
