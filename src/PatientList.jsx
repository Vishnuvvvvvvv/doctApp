// PatientList.js
import callEnabled from "../public/callEnabled.svg"
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import callEnd from '../public/callEnd.svg';
import React from 'react';
import {useContext,useEffect} from 'react';
import userContext from './userContext';
import "./PatientList.css"
import { Link } from 'react-router-dom';


function PatientList() {

  const clickHandler = ()=>{
    console.log("Click funstion clicked!")
  }
  

  
    let {user ,setUser,Setrecievername}=   useContext(userContext)
    var data =''    
    
    useEffect(()=>{
      console.log("User updated",user)
    },[user])

    console.log("Users in react: ",user);

    const handleCheckOut = () => {
      // Create a copy of the user array without the first element
      const newUserArray = user.slice(1);
  
      // Update the user context with the new array
      // This will trigger a re-render of this component
      setUser(newUserArray);
    }

   

 data =  user.map((item,index)=>{
              if(index === 0){
                return(
                  <>
                  <li><span className="patientName">{item.name}</span>
                  
                  <span onClick={()=>{Setrecievername(`${item.phone}`),clickHandler()}} ><Link to={`/consultation/${item.phone}`}> CheckIn</Link> </span>


                  <span onClick={()=>{ handleCheckOut()}}>Check Out</span>


                  </li>
                  
                  </>
                )
              }

          else{
        return(<>
            
            <li>  
            
           {/* //<img src={callEnabled} alt="Call Enabled" fill="red"/> */}
            <span onClick={()=>{Setrecievername(`${item.phone}`),clickHandler()}} className="view"> <Link to={`/consultation/${item.phone}`}> <span className="patientName">{item.name}</span> </Link></span>
            
           


            {/* <span onClick={()=>{Setrecievername(`${item.phone}`),clickHandler()}} ><img src={callEnd} alt=""/></span> */}
            </li>
            </>
        )

}
    })



    


  return (
    <div className="patient-list">
      <h3 className="heading">Patient Queue</h3>
      
      <ul>
      
     {data}

      </ul>
    
    </div>
  );
}



export default PatientList;
 // let datas = useContext(userContext)
    // console.log("data inside patlist: ",datas)
    // const data = datas.user.map((item)=>{
    //     return(
    //         <li>{item.name}</li>
    //     )
    // })