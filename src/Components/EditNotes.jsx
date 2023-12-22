import React, { useState } from 'react'
import { Link, useParams ,useNavigate } from 'react-router-dom'
import  {IoIosArrowBack} from "react-icons/io"
import useCreateDate from './useCreateDate';
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
    <div>


<header> 
<Link to="/"> <IoIosArrowBack/> </Link>


        </header>
        <form onSubmit={handlesub}>
       <button>save</button>
          <button onClick={handleDel}>delete</button>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea  cols="30" rows="10" value={details}  onChange={(e)=>setDetails(e.target.value)}></textarea>
        </form>
    </div>
  )
}

export default EditNotes