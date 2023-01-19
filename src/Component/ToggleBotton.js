import React from 'react'
import {useNavigate} from  'react-router-dom'

const ToggleBotton = ({tag}) => {
  const navigate = useNavigate();
  const path = `/search?q=${tag}`;
  return (
    <div>
        <button className='toggle-btn' onClick={()=>navigate(path)}>
          #{tag}</button>
        
    </div>
  )
}

export default ToggleBotton