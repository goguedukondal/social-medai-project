import React from 'react'
import "./Greet.css"

const Greet = () => {
  return (
    <div className='container'>
       <div className='hii'>
       <p>Hii</p>
       <img  className='hiipic' src="https://emojigraph.org/media/twitter/waving-hand-light-skin-tone_1f44b-1f3fb.png" alt ="loading"/> 
       
       </div> 
       
        
        <p className='welcome'>Welcome to Geekconnect</p>
        <div className='love-container'>
          <p>Love Animals</p>
           <img className='love-image' src="https://emojigraph.org/media/twitter/heart-exclamation_2763-fe0f.png" alt="love"/>
        </div>
        
    </div>
  )
}

export default Greet