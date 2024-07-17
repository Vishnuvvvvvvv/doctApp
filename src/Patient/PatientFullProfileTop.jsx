import React from 'react'
import "./PatientFullProfileTop.css"
function PatientFullProfileTop({patient}) {
  return (
    <>
    <div className="patient-full-profile1-top">
                <div className="patient-profile-picture">
                  <img className='patient-profile-image' width="100%"height="200px"src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" srcset="" />
                  </div>  
                  <div className="patient-profile-content">
                    <h1 className='patient-head-name'>{patient.name}</h1> 
                    <div className="inner-top-section">
                 
                   
                    <li className='patientlist'>{patient.phoneNumber}</li>
                  {patient.age && <>
                    <li className='patientlist'>{patient.age}</li>
                    <li className='patientlist'>{patient.Gender}</li>
                    <li className='patientlist'>{patient.BloodGroup}</li>
                    </>}
                    </div>
                    <div className="inner-top-section2">
                        
                    <li className='patientlist2'>Make a call</li>
                    <li className='patientlist2'>Comments</li>
                    </div>

                  </div>
            </div>
    </>
  )
}

export default PatientFullProfileTop