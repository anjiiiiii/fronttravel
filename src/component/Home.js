import { Typography ,Button} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <Box width = "100%" height ="90vh" position={"relative"}>
       <img src = "road.jpeg" alt ="road" width = "100%" height="70%"></img>
       <Typography variant='h3' textAlign={"center"} width ="100%" sx ={{position:"absolute",top:"0px", background:"#B2C8Df"}}>Dare to Live The Life You Always Wanted</Typography>
   

       <Box width="100%" height="30%"
            display={"flex"}  flexDirection="column">
              <Typography textAlign={"center"} variant ="h4" padding={4}>
                Share Your Travel Diaries
              </Typography>

              <Box margin="auto">
                <Button variant="outline" sx={{mr:2}}>share your story</Button>
                <Button LinkComponent={Link} to ="/diaries" variant="contained" sx={{ml:2}}> view diaries</Button>
                
              </Box>
    
       </Box>

   </Box>
   
  )
}

export default Home