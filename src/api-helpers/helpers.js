import axios from "axios"

export const getallposts = async()=>{
   const res = await axios.get("/posts")
   if(res.status !== 200){
    return console.log("some error occured")
   }

   const data = res.data;
    return data
}

export const sendauthrequest = async(signup,inputdata)=>{
    console.log(inputdata)
    const res = await axios.post(`/users/${signup ? "signup":"login"}/`,{
        name:inputdata.name ? inputdata.name:"jh",
        email:inputdata.email,
        password:inputdata.password
    }).catch(e=>console.log(e))

    const data = res.data;
    return data
 

}

export const addposts = async(add)=>{
    const res = await axios.post("/posts/",{
        title:add.title,
        description:add.description,
        location:add.location,
        image:add.image,
        date:add.date,
        user:localStorage.getItem("userid")
    }).catch(e=>console.log(e))
  
 
    const data = await res.data;
     return data
 }



 export const getpostdetails = async(id)=>{
    const res = await axios.get(`/posts/${id}`)
    .catch(e=>console.log(e))
   
 
    const data = await res.data;
     return data
 }


 export const updatepostbyid= async(dat,id)=>{
    const res = await axios.put(`/posts/${id}`,{
        title:dat.title,
        description:dat.description,
        location:dat.location,
        image:dat.image,
    })
    .catch(e=>console.log(e))
   
 
    const data = await res.data;
     return data
 }



 export const postdelete = async(id)=>{
    const res = await axios.delete(`/posts/${id}`)
    .catch(e=>console.log(e))
   
 
    const data = await res.data;
     return data
 }


 export const getuser = async()=>{
    const lid = localStorage.getItem("userid")
    const res = await axios.get(`/users/${lid}`)
    .catch(e=>console.log(e))
   
 
    const data = await res.data;
     return data
 }
