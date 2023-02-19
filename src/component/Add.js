import React from 'react'
import { Box } from '@mui/system'
import { Typography ,Button, FormLabel, TextField} from '@mui/material'
import { TravelExploreOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { addposts } from '../api-helpers/helpers'
import { useNavigate } from 'react-router-dom'


function Add() {
    const navigate = useNavigate()
    const [Add ,setAdd] = useState({title:"",description:"", image:"" ,date:"",location:""})
    const addhandle=(e)=>{
      setAdd({...Add,[e.target.name]:e.target.value})
    }


    const handlesubmit=(e)=>{
      e.preventDefault()
      
     addposts(Add).then((data)=>console.log(data))
     navigate("/Diaries")
    }


  return (
    <Box display = "flex" flexDirection={"column"} width ="100%" height="20%">
      <Box display= "flex" margin = "auto"padding={2}>
      <Typography variant = "h4" > Add your Travel Diary</Typography>
      <TravelExploreOutlined sx= {{fontSize:"40px",paddingLeft:"1",color:"blue"}}></TravelExploreOutlined>
      </Box>

      <form onSubmit={handlesubmit}>
        <Box  display = "flex" margin="auto" flexDirection={"column"} width ="70%" >
           <FormLabel>Title</FormLabel>
           <TextField  onChange={addhandle} value ={Add.title} name="title"></TextField>

           <FormLabel>Descripiton</FormLabel>
           <TextField onChange={addhandle} value ={Add.description} name="description"></TextField>

           <FormLabel>Image</FormLabel>
           <TextField  onChange={addhandle} value ={Add.image} name="image"></TextField>

           <FormLabel>Location</FormLabel>
           <TextField onChange={addhandle} value ={Add.location} name="location"></TextField>

           <FormLabel>Date</FormLabel>
           <TextField  onChange={addhandle} value ={Add.date} name="date" type="date"></TextField>

           <Button variant='contained' type='submit'>Post</Button>
        </Box>
      </form>
    </Box>
  )
} 

export default Add