
import React from 'react';
import './App.css';
import Appbar from './Component/Appbar';
import Home from './Pages/Home';
import Search from './Pages/Search';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Profile from './Pages/Profile';
import Comment from './Pages/Comment';
import { useState } from 'react';
import contextTheme from './Component/context';
 
function App() {
  const[isLight,setIslight]=useState(true);

  const changeTheme=(e)=>{
     setIslight(e);
  }
  return (
    <div className={isLight?"light":"dark"}>
      <contextTheme.Provider value={{isLight,changeTheme}}>
      <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/post/:id" element={<Comment/>}/>
      </Routes>
      
      </BrowserRouter>
      </contextTheme.Provider>
      
    </div>
  );
}

export default App;
