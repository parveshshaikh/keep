import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import './note.css'

const Note = (props) => {
  const  [show,setshow]=useState(false)
  const [note,setnote]=useState({
    title:"",
    content:""
  })

  const input =(e)=>{
    const {name,value}=e.target  
    setnote((pre)=>{
      return {...pre,
      [name]:value}
    })
  }
  const add=()=>{
props.add(note)
setnote({
  title:"",
  content:""
})
  }
  const showtext=()=>{
    setshow(true)
  }
  const hidetext=()=>{
    setshow(false)
  }

  return (
    <  >
    <div className='main_note' onDoubleClick={hidetext}  >
          <form>
                  
                
                  <input type='text' placeholder='Title' autoComplete='off ' name='title' onChange={input} value={note.title} onClick={showtext}/>
                
               { show?    
                    <textarea rows="" column="" placeholder='Write a Note...' name='content' onChange= {input} value={note.content}/> :null }
                    { show?
                    <Button onClick={add}>
                    <AddIcon className='plus'/>
                    </Button>:null}
                  
          </form>
      
    </div>
    </>
  )
}

export default Note
