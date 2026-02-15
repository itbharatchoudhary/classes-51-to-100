import { useState } from "react";
import NotesContent from "./Components/NotesContent";
import FormSubmit from "./Components/Formsubmit";


function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <FormSubmit onNoteAdded={() => setRefresh(!refresh)} />
      <NotesContent key={refresh} />
    </div>
  );
}

export default App;