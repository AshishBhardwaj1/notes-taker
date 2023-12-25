import React from 'react'
import { Link } from 'react-router-dom'
import "./noteitem.css"

const NoteItem = ({note}) => {
  return (
    <div className='Note-items'>

<Link to={`/edit/${note.id}`} className='note-item' > 

{/* <h4>{ note.title.length >10 ? (note.title.substr(0,10))+"...":note.title}</h4> */}
<h4 className='note-title'>{note.title} </h4>
<p className='details'> {note.details.length>80? (note.details.substr(0,80))+"...":note.details} </p>
<p className='date'>{note.date}</p>
</Link>
    </div>
  )
}

export default NoteItem