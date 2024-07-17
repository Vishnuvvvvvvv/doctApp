import React from 'react'
import "./PatientFullProfile.css"
import PatientFullProfileTop from './PatientFullProfileTop';
import PatientFullProfileBottom from './PatientFullProfileBottom';
import IndividualSection from './IndividualSection';

function PatientFullProfile({isOpen,setOpen,phoneN,patient, openRightSection}) {
    if(!isOpen)return null;
    
const overlaystyle={

}

  return (<>
  <div className="overlayclasss">


    <div className='patient-full-profile'>


    
    <div className='patient-full-profile1'>

          <PatientFullProfileTop patient={patient}/>
            
          {/* <PatientFullProfileBottom/> */}
          
    </div>

    <div className="patient-full-profile2">
    <button className="Patient_page_btn"onClick={()=>{setOpen(!isOpen)}}>Close</button>
   
     {/* { openRightSection &&  */}
     <div className="patient-full-profile2inner">
        <div className="three-content-section">
        < IndividualSection heading={"Heart Rate"}/>
        < IndividualSection heading={"Glucose"}/>
        < IndividualSection heading={"Blood pressure"}/>
        </div>
        <div className="three-content-section">
        < IndividualSection heading={"SPO2"}/>
        < IndividualSection heading={"Sleep Quality"}/>
        < IndividualSection heading={"Weight"}/>
        </div>
        <div className="three-content-section">
        < IndividualSection heading={"Diet"}/>
        < IndividualSection heading={"Activity Duration"}/>
        < IndividualSection heading={"Other"}/>
        </div>
     </div>   
{/* } */}

    </div>


    </div>
    

    </div>
  </>
  )
}

export default PatientFullProfile