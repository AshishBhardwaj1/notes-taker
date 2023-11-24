import React, { useState } from 'react'
import "./notes.css"

let id=0;
const Notes = () => {
  const [input,setInput] =useState('')
  const [item ,setItem] =useState([])
  const addNote =()=>{
  setItem( [ ...item,{
      id:id++,
      input:input
    }])
    
    
  }
  return (
    <div className='notes'>
      <h1>Notes taking App</h1>
      <div>

<input type="text" placeholder='add your notes here...'
 onChange={(e)=>setInput(e.target.value)}

/>
<button onClick={addNote}>add note</button>
      </div>
<div className='card-container'>
{
  item.map((prod,id)=>(
    <div className='card'>
    <li key={id}>{prod.input} {' '}
     <button className='del' onClick={()=>setItem(item.filter(a=> a.id !== prod.id))}>delete note</button>
     </li>
    </div>
  ))
}
  </div>
    </div>
    
  )
}

export default Notes