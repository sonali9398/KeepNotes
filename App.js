import React from 'react';
import './App.css';
import Header from './Component/Header';
import Area from './Component/Area';
import Note from './Component/Note';
import { useContext, useState } from 'react';
import Count from './Component/Count';

function App(props) {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevValue) =>{
      return[...prevValue, newNote]
    });
  }

  function deleteNote(id){
    setNotes(prevValue =>{
      return [...prevValue.filter((note, index)=>
        index !== id )];
    })
  }
  return (
    
    <>
      <div>
        <Header/>
        <Count count={notes.length === 0? "Empty" : `Showing ${notes.length} in database`}/>
        <Area onAdd={addNote}/>
          {notes.map((notes, index) =>(
        <Note 
          key={index} 
          id={index} 
          title={notes.title} 
          content={notes.content}
          onDelete={deleteNote}
          />
      ))}
      </div>
      
    </>
  );
}

export default App;
