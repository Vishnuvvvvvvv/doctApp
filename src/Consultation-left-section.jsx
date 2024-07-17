import React from 'react'
import PatientList from './PatientList';
import "./Consultation_left_Section.css"
function Consultation_left_section({loadSidebar}) {
if(!loadSidebar)return null;

  return (
      <div className="consultation-left-section">
    < PatientList />
      </div>
  )
}

export default Consultation_left_section