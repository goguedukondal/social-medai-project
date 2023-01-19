import React from 'react'
import "./Comments.css";
const Comments = ({data}) => {
   // console.log(data);
  return (
    <div className='comment-container'>
       <img className='animal-pic' src={data.image} alt="loading"/>
       <div className='owner'>
         <p>{data.text}</p>
         <p>-</p>
         <p className='ownername'>{data.owner.firstName}</p>
       </div>
       
    </div>
  )
}

export default Comments