
import React from 'react';


import Greet from '../Component/Greet';
import Postcard from '../Component/PostCard';
import {useEffect,useState} from 'react'
 
function Home() {
  const[post,setPost]=useState([]);

  useEffect(()=>{
    fetch(`https://dummyapi.io/data/v1/tag/pet/post`,
    {method:"GET",
  
    headers:{
      "app-id":"63c64bed0836b5d21fb43142"
    }
  }
    ).then(res=>res.json()).then(data=>setPost(data.data))
  },[])
  //console.log(post);
  return (
    <div className="App">
      
      <Greet/>

      
      {post.map((item,key)=>
      <Postcard 
      key = {key}
      username={item.owner.firstName}
      userpic={item.owner.picture}
      date={item.publishDate}
       petname={item.text}
       tag={item.tags}
       likes={item.likes}
       petpic={item.image}
       ownerid={item.owner.id}
       id={item.id}
      
      />
      )}
      

    </div>
  );
}

export default Home;
