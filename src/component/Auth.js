import React from 'react'
import { Box } from '@mui/system'
import { Button, FormLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { sendauthrequest } from '../api-helpers/helpers'
import { useDispatch } from 'react-redux'
import { authactions} from '../redux/authslice'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
   const [issignup,setissignup] = useState(true)
   const [input, setinput] = useState({name:"",email:"",password:""})
   const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(input)
   
    if(issignup)
    {
      sendauthrequest(true,input)
      
      .then((data)=>localStorage.setItem("userid", data.client._id))
      .then(()=>{dispatch(authactions.login())})
      
      .catch(e=>console.log(e))
      navigate("/Diaries")
    }else{
      console.log(issignup)
      console.log(input)
      sendauthrequest(false,input)
      .then((data)=>localStorage.setItem("userid", data.id))
      .then(()=>{dispatch(authactions.login())})
      .catch(e=>console.log(e))
      navigate("/Diaries")
    }
   }

  

  const inputhandle=(e)=>{
    console.log(e.target.name)
    setinput({...input,[e.target.name]:e.target.value})
  }


  return (
    <Box width = "40%" 
    borderRadius = {10}
    boxShadow={"5px 5px 10px #ccc"}
    margin ="auto"
    marginTop={5}
    >

   <form onSubmit={handlesubmit}>
    <Box display = "flex"
         flexDirection={"column"} 
         width = "60%" 
         margin="auto" 
         padding={2} >
         

      <Typography variant='h4' textAlign={"center"}>{issignup?"signup":"Login"} </Typography>
     {
      issignup && <>
      <FormLabel >Name</FormLabel>
      <TextField margin='normal' value={input.name} name ="name" onChange={inputhandle}></TextField> </> }

      <FormLabel >Email</FormLabel>
      <TextField margin='normal' value={input.email} name ="email"onChange={inputhandle}></TextField>

      <FormLabel >Password</FormLabel>
      <TextField margin='normal'  value={input.password} name ="password"onChange={inputhandle}></TextField>

      <Button type='submit' variant="contained" sx ={{mt:1}} >{issignup?"signup":"Login"} </Button>

      <Button  variant=' outline' sx ={{mt:1}} onClick={()=>setissignup(!issignup)} > Change To {issignup?"Login":"signup"}</Button>    
      
     
    </Box>
   </form>

    

    </Box>
  )
}


export default Auth