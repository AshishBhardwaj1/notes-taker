import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  return (
<Link to={`/edit/${note.id}`}> 
{/* <h4>{ note.title.length >10 ? (note.title.substr(0,10))+"...":note.title}</h4> */}
<h4>{note.title} </h4>
<p> {note.details} </p>
<p>{note.date}</p>
</Link>
  )
}

export default NoteItem