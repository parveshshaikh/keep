import React from 'react'
import './card.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Card = (props) => {
 
  return (
    <div className='note'>
          <h1>{props.title}</h1>
          <br/>
          <p>{props.content}</p>
          <button className='btn' onClick={()=>{props.select(props.id)}}>
      <DeleteOutlineIcon className='deleteIcon' />
      </button>
    </div>
  )
}

export default Card
