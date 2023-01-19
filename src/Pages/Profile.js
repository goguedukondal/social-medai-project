import React from 'react'
import { useParams } from 'react-router'
import { useEffect,useState } from 'react';
import User from '../Component/user';
import Postcard from '../Component/PostCard';

function Profile() {
    const [userData,setUserData] =useState([]);
    const [userPosts,setUserPosts] = useState([]);
    const {id} =useParams();
    useEffect(()=>{
        //API calling for USER DATA
        fetch(`https://dummyapi.io/data/v1/user/${id}`,
        {method:"GET",
      
        headers:{
          "app-id":"63c64bed0836b5d21fb43142"
        }
      }
        ).then(res=>res.json()).then(data=>setUserData(data));

        
     //API calling for user Posts
     
        fetch(`https://dummyapi.io/data/v1/user/${id}/post`,
        {method:"GET",
      
        headers:{
          "app-id":"63c64bed0836b5d21fb43142"
        }
      }
        ).then(res=>res.json()).then(data=>setUserPosts(data.data));



      },[id])
     // console.log(userData.email);
    //   userData.foreach((e,idx) =>{
    //     console.log(e);
    //   })
  return (
    <div>
      {/* <p style={{"textAlign":"center","margin":"20px"}}>All Posts</p> */}
      {userData.length===0?(
      <h1>Loading</h1>):(
      
        <>
        <User data={userData} />
      
    
      {userPosts.map((item,key)=>
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
      
      />
      )}
        </>
      )
      }
      {/* <User data={userData} />
      
    
      {userPosts.map((item,key)=>
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
      
      />
      )} */}

 
    </div>
 
  )
  
}

export default Profile
