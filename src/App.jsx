import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Note from './Components/Note'
import CreateNotes from './Components/CreateNotes'
import EditNotes from './Components/EditNotes'
const App = () => {

    const getItem =() => {
        const notes = localStorage.getItem('notes')
        if (notes) {
            return JSON.parse(localStorage.getItem('notes'))
        } else{
            return []
        }
    }
    const [notes,setNotes ] =useState(getItem())
  useEffect(()=>{
    localStorage.setItem('notes' , JSON.stringify(notes))
  },[notes])
  return (
   <BrowserRouter>
<Routes>

  <Route path='/' element ={<Note notes={notes} />}  />
  <Route path='/create' element ={<CreateNotes setNotes={setNotes}/>}  />
  <Route path='/edit/:id' element ={<EditNotes notes={notes}  setNotes={setNotes}/>}  />


</Routes>
   </BrowserRouter>


  )
}

export default App