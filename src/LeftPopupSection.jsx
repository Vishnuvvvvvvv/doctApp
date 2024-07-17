import React, { useContext } from 'react'
import "./LeftPopupSection.css"
import userContext from './userContext';
import PatientList from './PatientList';
import newDupli from './newDupli';
function LeftPopupSection({isOpen,setSidebarOpen}) {
   
if(!isOpen)return null;
let datas = useContext(userContext)

const click = ()=>{

    datas.setUser([...datas.user,{
        id:"5",
        name:"vis",
        age:"45"
    }])
 
}


 console.log("data : ",datas)
  return (
    <div className="overlayclass">
     <div className="popup">
     <button className='popupBtn' onClick={()=>{setSidebarOpen(false)}}>
    close

     </button>
     
    <PatientList/>
    </div>
    <button onClick={click}>click</button>
  </div>
  )
}

export default LeftPopupSection