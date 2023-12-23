import React, { useState } from 'react'
import {CiSearch} from "react-icons/ci"
import { Link } from 'react-router-dom'
import {BsPlusLg} from "react-icons/bs"
import NoteItem from './NoteItem'
const Note = ({notes }) => {
    const [text, setText] = useState("")
    const [filtered,setFiltered] =useState(notes)

    const search = ()=>{
      const filteredItem = notes.filter((note)=>
      note.title.toLowerCase().includes(text.toLowerCase())
      )
      setFiltered(filteredItem)
    }
  return (
    <div>
         <header>
           <h2>Notes</h2>
               <input
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                   placeholder="search your notes here..."
                   value={text}
               />
        <button onClick={search()}>
          <CiSearch />{" "}
        </button>
      </header>
      <div className="notes-container">
        {filtered.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create">
        {" "}
        <BsPlusLg />{" "}
      </Link>
    </div>
  );
}

export default Note