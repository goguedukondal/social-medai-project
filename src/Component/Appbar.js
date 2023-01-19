import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import contextTheme from './context';
import { useContext } from 'react';


import { Switch } from 'antd';
//import { color } from '@mui/system';



const Appbar = ({theme,setTheme}) => {
  const {isLight,changeTheme}=useContext(contextTheme);
  // const setTheme1=(setTheme)=>{
  //  setTheme=!theme;
  // }
  return (
    <div>
   


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{
              textDecoration:"none",
              color:"white",
              marginLeft:"20px"
            }} to="/">
              Geek-Connect
            </Link>
            
          </Typography>
          <div onClick={()=>changeTheme(!isLight)}>
          <  Switch defaultChecked />
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
      </div>
  )
}

export default Appbar