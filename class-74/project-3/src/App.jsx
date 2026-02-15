import React, { useState } from 'react'

const App = () => {

  const [name,setName] = useState("");

  return (
    <div>
      <form action="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>your name is : {name}</p>
      </form>
    </div>
  )
}

export default App
