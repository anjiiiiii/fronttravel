import React from 'react'
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'
import { ModeOfTravelOutlined, Padding } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const linkarr = ["home","diaries","auth"]
const loggedarr = ["home","diaries","add","profile"]
function Header() {
  const isloggedin = useSelector(state => state.isloggedin)
    const[value,setvalue] = useState()
  return (
    <AppBar sx={{bgcolor:"transparent",position:"sticky"}} >
        <Toolbar>                                 { /*toolbar gives the structure to Appbar looks*/} 
          <ModeOfTravelOutlined sx ={{color:"black"}}></ModeOfTravelOutlined>


          <Tabs sx={{ml:"auto",textDecoration:"none"}} value={value} onChange={(e,val)=>setvalue(val)}>
              {isloggedin ?loggedarr.map((i)=>{
                   return <Tab  LinkComponent = {Link}
                                to ={`/${i === "home" ? "":i}`}
                                label={i} key ={i}
                                sx={{textDecoration:"none",":hover":{
                                textDecoration:"underline",
                                textUnderlineOffset:"20px",}}}>
          </Tab>}) : linkarr.map((i)=>{
                   return <Tab  LinkComponent = {Link}
                                to ={`/${i === "home" ? "":i}`}
                                label={i} key ={i}
                                sx={{textDecoration:"none",":hover":{
                                textDecoration:"underline",
                                textUnderlineOffset:"20px",}}}>
          </Tab>})}
          </Tabs>
          
        
           
         

        </Toolbar>                                               
    </AppBar>

  )
}

export default Header