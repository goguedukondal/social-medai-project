import React from 'react'
import {useSearchParams} from "react-router-dom"
import {useEffect,useState} from 'react'
import Postcard from '../Component/PostCard'

const Search = () => {
    const [URLSearchParams] = useSearchParams();
    const query = URLSearchParams.get("q")
    const[post,setPost]=useState([]);

  useEffect(()=>{
    fetch(`https://dummyapi.io/data/v1/tag/${query}/post`,
    {method:"GET",
  
    headers:{
      "app-id":"63c64bed0836b5d21fb43142"
    }
  }
    ).then(res=>res.json()).then(data=>setPost(data.data))
  },[query])
  return (
    <div>
       {post.map((item,index)=>
      <Postcard 
      key={index}
      username={item.owner.firstName}
      userpic={item.owner.picture}
      date={item.publishDate}
       petname={item.text}
       tag={item.tags}
       likes={item.likes}
       petpic={item.image}
      
      />
      )}

    </div>
  )
}

export default Search