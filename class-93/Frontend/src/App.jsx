import React, { useState } from 'react'
import axios from "axios";

const App = () => {

  const [Notes, setNotes] = useState([
    {
      "Title": "the title 1",
      "Description": "This is the content of my 1st Note.",
    },
    {
      "Title": "the title 2",
      "Description": "This is the content of my 2nd Note.",
    },
    {
      "Title": "the title 3",
      "Description": "This is the content of my 3rd Note.",
    },
    {
      "Title": "the title 4",
      "Description": "This is the content of my 4th Note.",
    }
  ]);

  axios.get('http://localhost:3000/notes').then((res)=>{
    setNotes(res.data.Notes)
  })

  return (
    <>
    <h1 className="Notes-Heading">Notes</h1>
      <div className="Notes">
        {
          Notes.map((Note, Index) => {
            return (
              <div className="Note" Key="Index">
                <h3>{Note.Title}</h3>
                <p>{Note.Description}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
