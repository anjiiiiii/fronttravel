import React, { useEffect, useState } from 'react'
import { getuser } from '../api-helpers/helpers'
import { Box } from '@mui/system'
import { Typography ,Button, FormLabel, TextField} from '@mui/material'
import Diaryitem from './Diaryitem'
import { useDispatch } from 'react-redux'
import { authactions} from '../redux/authslice'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profiledata,setprofiledata] = useState()
   useEffect(()=>{
      getuser().then(data=>setprofiledata(data.profile)).catch(e=>console.log(e))
   },[])

    const logout=()=>{
      dispatch(authactions.logout())
      localStorage.removeItem("userid")
      navigate("/")
    }

  return (
   
    <Box display = "flex" flexDirection ={"column"}>
      {
        profiledata && <>
        {""}
        <Typography textAlign={"center"} variant ="h3" padding={1}> User Profile</Typography>
      <Typography padding={1} textAlign="left">Name:{profiledata.name} </Typography>
      <Typography padding={1} textAlign="left">Email:{profiledata.email} </Typography>
      <Button onClick={logout}>Logout</Button>
      <Box display= "flex" flexDirection ={"column"} justifyContent="center" alignItems={"center"}>
       {
        profiledata.posts.map((item,index)=>(
               <Diaryitem 
               key={index}
               date ={item.date}
               description={item.description}
               title={item.title}
               location={item.location}
               
               image={item.image}></Diaryitem>
        ))
       }
      </Box>
        </>
      }
     

    </Box>
  )
}

export default Profile