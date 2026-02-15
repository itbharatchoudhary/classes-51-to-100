import { useState, useEffect } from "react";
import axios from "axios";
import "./NotesContent.css";

const NotesContent = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios
      .get("http://localhost:3000/Notes")
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((err) => console.error("Error fetching notes:", err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h1 className="Notes-Heading">Notes</h1>
      <div className="Notes">
        {notes.length === 0 && <p>No notes available.</p>}
        {notes.map((note) => (
          <div className="Note" key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesContent;