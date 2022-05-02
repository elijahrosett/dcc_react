import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/displayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {
  const [entries, setEntries ] = useState([{weight: 175, date: "11-23-2021"}])
  
  function addNewEntries(entry){

    let tempEntries = [...entries, entry]

    setEntries(tempEntries)
  }
  return (
    <div >
<DisplayEntries parentEntries={entries} />
<AddEntryForm addNewEntryProperty ={addNewEntries}/>
    </div>
  );
}

export default App;
