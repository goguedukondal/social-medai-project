import React from 'react'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import Comments from '../Component/Comments'
const Comment = () => {
    const {id} =useParams();
    const[post,setPost]=useState([]);
   // console.log(id);

    useEffect(()=>{
      fetch(`https://dummyapi.io/data/v1/post/${id}`,
      {method:"GET",
    
      headers:{
        "app-id":"63c64bed0836b5d21fb43142"
      }
    }
      ).then(res=>res.json()).then(data=>setPost(data))
    },[id])
    //console.log(post);
  return (
    <div>
        {/* {post.length===0?(<>Loading...</>):(<><Comments data={post}/></>)} */}
       
       {post.length===0?(<h1>Loading..</h1>):(<Comments

       data={post}
       />)}
      
     
     
      
      
    </div>
  )
}

export default Comment