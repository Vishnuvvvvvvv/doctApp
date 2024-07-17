import React,{useState} from 'react'
import HomeNavbar from './HomeNavbar'
import DoctorProfile from './DoctorProfile'
import "./HomePage.css"
import ConnectPeer from "./ConnectPeer"
import NewsRecommendation from './NewsRecommendation'
function HomePage() {
  

  const scrollToBottom = () => {
    const secondSection = document.getElementById('secondSection');
    if (secondSection) {
      secondSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (<div className='mainHome'>
   
        {/* <UserProvider> */}
        <div className="first ">
        <HomeNavbar />
        <DoctorProfile scrollToBottom ={scrollToBottom }/>
        
        </div>
        {/* </UserProvider> */}
      <hr />


        <div className="second" id="secondSection">
          <ConnectPeer/>
         
          </div>
          {/* <NewsRecommendation/>  */}

         
          
           </div>
  )
}

export default HomePage