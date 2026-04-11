import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import RightSection from "./right/rightsection";
import Leftsection from "./left/leftsection";

const App = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes);


 return( <div className="h-screen flex">
  <div className="w-1/2 border-r border-white">
    <Leftsection setNotes={setNotes} />
  </div>

  <div className="w-1/2">
    <RightSection notes={notes} setNotes={setNotes} />
  </div>
</div>)
}

export default App;