import { Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Auth from"./component/Auth"
import Diaries from"./component/Diaries"
import { useSelector } from "react-redux";
import Add from "./component/Add"
import Profile from "./component/Profile"
import UpdateDiary from "./component/UpdateDiary";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { authactions } from "./redux/authslice";


function App() {
  const dispatch = useDispatch()
        const isloggedin = useSelector(state => state.isloggedin)
        console.log(isloggedin)


        useEffect(()=>{
          if(localStorage.getItem("userid")){
          dispatch(authactions.login())
          }
        },[localStorage])

  return (
    <div>
      <Header></Header>

      <div style={{ width:"100%", position:"absolute"}}>
         <Routes>
           <Route path ="/" element={<Home></Home>}></Route>
           <Route path ="/diaries" element={<Diaries></Diaries>}></Route>
           <Route path ="/auth" element={<Auth></Auth>}></Route>
           {
            isloggedin && <>
             <Route path ="/add" element={<Add></Add>}></Route>
             <Route path ="/profile" element={<Profile></Profile>}></Route>
             <Route path ="/post/:id" element={<UpdateDiary></UpdateDiary>}></Route>
            </>
           }
          
         </Routes>
      </div>
    </div>

  );
}

export default App;
