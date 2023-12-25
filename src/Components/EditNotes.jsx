import React, { useState } from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import  {IoIosArrowBack} from "react-icons/io"
import useCreateDate from './useCreateDate';
import "./editnote.css"
const EditNotes = ({notes,setNotes}) => {
  const {id} = useParams();
  console.log(id);
  const note  =notes.find((item)=> item.id==id)
const date =useCreateDate()
const [title,setTitle] =useState(note.title)
const [details ,setDetails] = useState(note.details)
const navigate =useNavigate()
const handlesub =(e)=>{
  e.preventDefault();
  if (title && details) {

    const newNote ={...note ,title ,details, date}
    const newNotes = notes.map(item =>{
      if (item.id==id) {
        item=newNote
      }return item
    }

    )
    setNotes(newNotes)
  }
navigate('/')
}
const handleDel =() =>{
     const newNotes = notes.filter(item=> item.id!=id

      ) 
      setNotes(newNotes)
      navigate('/')

}
  return (
    <div className='edit-note'>


<header className='heading'> 
<Link to="/"> <IoIosArrowBack  style={{fontSize:"30px", color:"white", marginTop:"20px",marginLeft:"20px",backgroundColor:"transparent"}}/> </Link>


        </header >
        <form onSubmit={handlesub}>
          <div className='btn'>

       <button className='save' >save</button>
          <button className='del-btn' onClick={handleDel}>delete</button>
          </div>
            <input className='input-title' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea  cols="30" rows="10" value={details}  onChange={(e)=>setDetails(e.target.value)}></textarea>
        </form>
    </div>
  )
}

export default EditNotes