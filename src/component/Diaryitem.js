import React from 'react'
import { ModeEditOutlineOutlined,DeleteForeverOutlined} from '@mui/icons-material'
import { Typography ,Button,Card, CardHeader,Avatar,IconButton,CardMedia,CardContent, CardActions} from '@mui/material'
import { Link } from 'react-router-dom'
import { postdelete } from '../api-helpers/helpers'
function Diaryitem({title,description,image,location,date,id,user}) {

const isloggedinuser =()=>{
    if (localStorage.getItem("userid") === user){
      return true
    }

    else{
       return false
    }
    
  }


  const deletepost=()=>{
    postdelete(id).then(data=>console.log(data)).catch(e=>console.log)
  }
 

  return (
    <Card sx={{ maxWidth:700, width:"100vw",padding:"4px", marginTop:"4%"}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
        
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
        
        </IconButton>
      }
      title={title}
      header={location}
      subheader={date}
    />
    <img   style={{margin:"auto"}}
       width="700"
      height="300"
      src={image}
      alt={title}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
{ isloggedinuser() &&(

  <CardActions sx={{marginleft:"auto"}}>
    <IconButton LinkComponent ={Link}to ={`/post/${id}`}>
                                
    <ModeEditOutlineOutlined ></ModeEditOutlineOutlined>
    </IconButton>
 
 <DeleteForeverOutlined  onClick={deletepost}></DeleteForeverOutlined>

</CardActions>
  )
  


}
   
    
  </Card>
  )
}

export default Diaryitem