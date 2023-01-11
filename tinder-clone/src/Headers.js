import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum'

function headers() {
  return (
    <div className='headers'>
    <IconButton>
    <PersonIcon fontSize='large' className='header_icon'/>
    </IconButton>

    <img className="header-logo" src="https://img.icons8.com/fluency/512/--tinder.png" alt="tinder-icon" />

    <ForumIcon fontSize='large' className='header_icon' />

    </div>
    
   

   
  )
}
export default headers;