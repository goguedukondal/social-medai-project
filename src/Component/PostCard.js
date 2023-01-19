import React from 'react'
import "./Post.css"
import ToggleBotton from './ToggleBotton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import {useState} from "react";
import { useNavigate } from 'react-router';

const Postcard = ({userpic,username,date,petpic,petname,tag,likes,userlastname,ownerid,id}) => {
  const [likesNo,setLikesNo]=useState(likes);
  const [likeNoStatus,setLikeNoStatus]=useState(false);
  const navigate=useNavigate();
  
  //console.log(ownerid);
  return (
    <div className='postcard-container'>
     <div className='user-section' 
     onClick={()=>{
      const path=`/profile/${ownerid}`
      navigate(path);
     }}
     >
        <img  className='userpic' src={userpic} alt="loading"/>

        <div className='user'>
        <p >{username}</p> 
        <p>{date}</p>
         </div>
      </div> 
      <img width="500px" src={petpic} alt="loading"/>
      <p className='petname'>{petname}</p>
      <div className='btns'>
       
      {tag.map((item,index)=><ToggleBotton  tag={item} key={index}/>)}
      </div>
      <div className='favourite-container'>
      <div>
      <FavoriteIcon 
      onClick={()=>{setLikeNoStatus(prev=>!prev);
        const likeValue=likeNoStatus?likes:likes+1;
        setLikesNo(likeValue)
      }}
      style={likeNoStatus?{color:"red"}:{color:"grey"}}/>
      <span>{likesNo}</span>
      </div>
      <div onClick={()=>{
      const path1=`/post/${id}`
      navigate(path1);
     }}>
        <MessageIcon/>
      </div>
      </div>
      

    

    </div>
  )
}

export default Postcard