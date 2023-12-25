import React, { useEffect, useState } from 'react'
import "./note.css"
import {CiSearch} from "react-icons/ci"
import { Link } from 'react-router-dom'
import {BsPlusLg} from "react-icons/bs"
import NoteItem from './NoteItem'
const Note = ({notes }) => {
    const [text, setText] = useState("")
    const [filtered,setFiltered] =useState(notes)

    // const search = ()=>{
    //   const filtered = notes.filter((note)=>  {

    //   return  text.toLowerCase()===""? note: note.title.toLowerCase().includes(text)
    //   }
      
    //   )
    //   setFiltered(filtered)

    // }
  return (
    <div className='note'>
         <header className='heading' style={{display:"flex" ,justifyContent:"space-between ",padding:"10px"}} >
          <div >

            <h2 > My Notes</h2>
          </div>
          <div className='search'>

               <input className='search-note'
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                   placeholder="search your notes here..."
                   value={text}
               />
        <button className='search-btn' >
          <CiSearch  />{" "}
        </button>
          </div>
      </header>
      <div >
        <div className='notes'>

        {notes.filter((note)=>{
          return text.toLowerCase()===""? note: note.title.toLowerCase().includes(text)
        }).map((note) => (
          <NoteItem key={note.id} note={note} />
          ))}
          </div>
      </div>
     
      <Link to="/create" className='add-note'>
        {" "}
        <BsPlusLg />{" "}
      </Link>
    </div>
  );
}

export default Note