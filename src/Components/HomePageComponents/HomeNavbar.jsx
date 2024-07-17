import React, { useState } from 'react';
import './HomeNavbar.css';
import { Link } from 'react-router-dom';
import LeftPopupSection from '../../LeftPopupSection';
function HomeNavbar() {
    
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home-navbar">
      <nav className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* <div className="title">Your App</div> */}
        <div className="menus">
        <div className="title"><Link to="/Consultation"> Consult</Link></div>
        {/* <div className="title"><Link to="/patientui"> Dashboard</Link></div> *//**This caontains web rtc setups and all dont delete it */}
        <div className="title"><Link to="/DashBoard"> Records</Link></div> 
        </div>
      </nav>

      <LeftPopupSection isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
     
       
     
    </div>
  );
}

export default HomeNavbar;
