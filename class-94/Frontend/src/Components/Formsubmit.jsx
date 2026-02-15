import { useState } from "react";
import axios from "axios";
import "./Formsubmit.css";

function FormSubmit({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = { title, description };

    axios
      .post("http://localhost:3000/Notes", noteData)
      .then((res) => {
        setTitle("");
        setDescription("");
        if (onNoteAdded) onNoteAdded();
      })
      .catch((err) => console.error("Error submitting note:", err));
  };

  return (
    <div className="form-wrapper">
      <form className="note-card" onSubmit={handleSubmit}>
        <h2 className="card-title">Create Note</h2>

        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit Note
        </button>
      </form>
    </div>
  );
}

export default FormSubmit;