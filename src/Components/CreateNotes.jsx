import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import  {IoIosArrowBack} from "react-icons/io"
import useCreateDate from './useCreateDate'
import { v4 as uuid } from 'uuid'
const CreateNotes = ({setNotes}) => {
    const [title ,setTitle] =useState('')
    const [details ,setDetails] =useState('')

     const navigate = useNavigate();
    const date = useCreateDate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        if (title && details) {
            const note ={id:uuid(), title,details ,date}
            console.log(note);
            setNotes(prevnotes=>[note , ...prevnotes])
            navigate('/')
        }
    }

  return (
    <div>

        <header> 
<Link to="/"> <IoIosArrowBack/> </Link>


        </header>
        <form onSubmit={handleSubmit}>
<button onSubmit={handleSubmit}>save</button>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea value={details} cols="30" rows="10" onChange={(e)=>setDetails(e.target.value)}></textarea>
        </form>
    </div>
  )
}

export default CreateNotes