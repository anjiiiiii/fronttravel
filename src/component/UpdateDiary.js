import React, { useEffect } from 'react'
import { getpostdetails, updatepostbyid } from '../api-helpers/helpers'
import {useParams} from "react-router-dom"
import { Box } from '@mui/system'
import { Typography ,Button, FormLabel, TextField} from '@mui/material'
import { TravelExploreOutlined } from '@mui/icons-material'
import { useState } from 'react'

function UpdateDiary() {

  const [Add ,setAdd] = useState({title:"",description:"", image:"" ,date:"",location:""})
  const [post ,setpost] = useState({title:"",description:"", image:"" ,date:"",location:""})

   const id = useParams().id

   useEffect(()=>{
    console.log(id)
       getpostdetails(id).then(data=>
        {
          setpost(data.posts)

        setAdd({
        title:data.posts.title,
        description:data.posts.description,
        location:data.posts.location,
        image:data.posts.image,
       })}
       
        

        
       ).catch(e=>console.log(e))  
   },[id])



   const addhandle=(e)=>{
     setAdd({...Add,[e.target.name]:e.target.value})
   }


   const handlesubmit=(e)=>{
     e.preventDefault()
      console.log(Add)
      updatepostbyid(Add,id).then(data=>console.log(data)).catch(e=>console.log(e))
   }

  return (
    <Box display = "flex" flexDirection={"column"} width ="100%" height="20%">
    <Box display= "flex" margin = "auto"padding={2}>
    <Typography variant = "h4" > Add your Travel Diary</Typography>
    <TravelExploreOutlined sx= {{fontSize:"40px",paddingLeft:"1",color:"blue"}}></TravelExploreOutlined>
    </Box>

   {
    post &&  <form onSubmit={handlesubmit}>
    <Box  display = "flex" margin="auto" flexDirection={"column"} width ="70%" >
       <FormLabel>Title</FormLabel>
       <TextField  onChange={addhandle} value ={Add.title} name="title"></TextField>

       <FormLabel>Descripiton</FormLabel>
       <TextField onChange={addhandle} value ={Add.description} name="description"></TextField>

       <FormLabel>Image</FormLabel>
       <TextField  onChange={addhandle} value ={Add.image} name="image"></TextField>

       <FormLabel>Location</FormLabel>
       <TextField onChange={addhandle} value ={Add.location} name="location"></TextField>

      

       <Button variant='contained' type='submit'>Post</Button>
    </Box>
  </form>
   } 
  </Box>
  )
}

export default UpdateDiary