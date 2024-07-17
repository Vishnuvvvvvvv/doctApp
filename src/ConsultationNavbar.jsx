// ConsultationNavbar.js
import React, { useState } from 'react';
import './ConsultationNavbar.css'
import { Link } from 'react-router-dom';
function ConsultationNavbar({setloadSidebar,loadSidebar}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setloadSidebar(!loadSidebar)
    console.log("loadbar:",loadSidebar)
  };

  return (
    <nav className='consultation-navbar'>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

   
     <div className="nav-cons-mini">
      <Link to="/" className="home-link">
        Home
      </Link>
     
   <Link to="/DashBoard"> Records</Link></div>
    </nav>
  );
}

export default ConsultationNavbar;
