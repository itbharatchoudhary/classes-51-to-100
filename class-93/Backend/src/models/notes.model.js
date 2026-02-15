const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    Title: String,
    Description: String,
});

const NoteModel = mongoose.model("notes", NoteSchema);

module.exports = NoteModel