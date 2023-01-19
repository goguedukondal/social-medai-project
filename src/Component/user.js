import React from 'react'
import "./user.css"
// {profilepic,Name,City,Country,date,email,cell}
 const User = ({data}) => {
    // console.log(data);

   // console.log(data.email);
    // console.log(data.location.city)
    // const myArray = data.dataOfBirth.split("-");
    // let year = myArray[0]; 
  return (
    <div className='user-container'>
        <div >
          <img className='profilepic' src={data.picture} alt="loading"/>
        </div> 
        <div >
            <h1>{data.firstName}</h1> 
            {/* <h2>{data.location.city}</h2>
             <span>{data.location.country}</span> */}
            <p>Member since </p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    </div>
  )
}
export default User;