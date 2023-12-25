import React, { useState } from 'react'
import "./createnotes.css"
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
    <div className='create-note' >
      <header className='heading'  style={{display:"flex" ,justifyContent:"space-between", alignItems:"center"}}>
 

        <Link to="/" >
          {" "}
          <IoIosArrowBack style={{fontSize:"30px", color:"white", marginTop:"20px",marginLeft:"20px"}}/>
        </Link>
        
      </header>
      <form onSubmit={handleSubmit} className='form' >
        <button onSubmit={handleSubmit} className='save-btn'>save</button>
        <input
          placeholder='Title'
          type="text" className='input-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder='add your notes here...'
          value={details}
          cols="30"
          rows="10"
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
}

export default CreateNotes