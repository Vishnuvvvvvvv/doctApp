import React,{useState,useEffect,useContext} from 'react'
import userContext from './src/userContext';

function DoctorLogin({setShowConsultationPage}) {

let {user,setUser,allpatientDetail,setallpatientDetail,phoneNum,setPhoneNum,username,setUsername,socket} = useContext(userContext)

const HandleUsername = ()=>{
   console.log("Clicked me")
    socket.emit("set-username",{username});
}
    

  return (
    <div>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}placeholder="Enter your name"/>
        <input type="text" placeholder="Enter the password"/>

        <button onClick={()=>{setShowConsultationPage(true),HandleUsername()}}>Login</button>
    </div>
  )
}

export default DoctorLogin