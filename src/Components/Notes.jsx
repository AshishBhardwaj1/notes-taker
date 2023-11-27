import React, { useEffect, useState } from 'react'
import "./notes.css"

const getItems =()=>{
  let note = localStorage.getItem('note')
  console.log(note);
  if(note){
    return JSON.parse(localStorage.getItem('note'))
  } else{
    return []
  }
}
let id=0;
const Notes = () => {
  const [input,setInput] =useState('')
  const [item ,setItem] =useState(getItems())
  const [search,setSearch] =useState("")
 useEffect(()=>{
localStorage.setItem("note",JSON.stringify(item))
 },[item])
  const addNote =()=>{
    if (input.trim()!=="") {

      setItem( [ ...item,{
          id:id++,
          input:input,
          
        }])
        setInput('')
    }
  }
  const editTodo =(item)=>{
            item.filter(a=>a.id)
            setItem(input)
  }
  // const searchedItem = item.filter(items=> items.toLowerCase().includes(search.toLowerCase())
  // )
  return (
    <div className='notes'>
      <h1>Notes taking App</h1>
      <div>

<input type="text" value={input} placeholder='add your notes here...' 
 onChange={(e)=>setInput(e.target.value)}

/>
<button className='btn' onClick={addNote}>add note</button>
      </div>
      
<div className='card-container' >
  <div className='search'> 

<input type="search" placeholder='search your notes here' value={search} onChange={(e)=>setSearch(e.target.value)} />
  </div>
  <div style={{display:"flex" , flexWrap:"wrap"}}> 

{
  item.map((prod,id)=>(
    <div className='card'>
      <div className="text" >

    <li key={id} >{prod.input}  {' '}
     </li>
      </div>
    <div style={{position:"absolute",bottom:"10px"}}>

     <button className='card-btn'  onClick={()=>setItem(item.filter(a=> a.id !== prod.id))}>delete</button>
     <button className='card-btn' onClick={editTodo}>edit</button>
    </div>
    </div>
  ))
}
  </div>
  </div>
    </div>
    
  )
}

export default Notes