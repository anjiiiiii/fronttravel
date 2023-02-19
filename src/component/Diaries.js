import React, { useState } from 'react'
import { Box } from '@mui/system'
import Diaryitem from './Diaryitem'
import { getallposts } from '../api-helpers/helpers'
import { useEffect } from 'react'

function Diaries() {
const [posts,setposts] = useState()

 useEffect(()=>{
      getallposts().then((data)=>setposts(data?.posts)).catch(err=>console.log(err))
 },[])
  
 console.log(posts)
 

  return (
    <Box display={"flex"} flexDirection={"column"} padding={3} justifyContent={"center"} alignItems={"center"}>
      {""}
      {posts && posts.map((item)=>(
          <Diaryitem 
      
          date ={new Date(`${item.date}`).toLocaleDateString()}
          description={item.description}
          title={item.title}
          location={item.location}
          id = {item._id}
          image={item.image}
          user={item.user}
          >

          </Diaryitem>
      ))}
    </Box>
  )
}

export default Diaries