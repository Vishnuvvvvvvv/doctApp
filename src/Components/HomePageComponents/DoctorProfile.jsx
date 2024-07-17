import React,{useState} from 'react'
import "./DoctorProfile.css"
function DoctorProfile({scrollToBottom }) {


  return (
    <div className='doctor-profile-container'>
      

      <div className="prof_div">
            <div className="photomain">
              <div className="photo">
              <button className='float-but1'>Check News</button>
              <button className='float-but2'>Update Profile</button>
              <button onClick={()=>{scrollToBottom()}}  className='float-but3'>Consult Peer</button>
            
            <img className='doct_pic'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgyOV-6XrHO1uzl9h6vQrF7OSIjhqRtLiKQ&usqp=CAU" alt="" />
            </div>  
            </div>

            <div className="prof-content">

            
                <h3 className='prof_head'>Dr James Chadwick</h3>
                <p className='prof_para'>Age:54</p>
                <p className="prof_para">9447163558</p>
                <p className="prof_para">MBBS,PG,Peadiatristian</p>
                <p className="prof_para">Exp:34 Year</p>
            </div>
    </div>
      
    </div>
  )
}

export default DoctorProfile