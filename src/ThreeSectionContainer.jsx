import React,{useState} from 'react'
import MedicinePrescription from './MedicinePrescription'
import './ThreeSectionContainer.css'
import Messagesection from './Messagesection'
function ThreeSectionContainer({patientPhoneNum}) {
    const [medicinePrescription,setMedicinePrescription] = useState(false);
    const [messageSection,setMessageSection] = useState(false)


  return (
    <div className='threeSectionContainer'>

    <div className='head-section'>
       <ul className='insideul'>
        <li onClick={()=>{setMedicinePrescription(true) , setMessageSection(false)}} className='insideli'>Prescribe</li>
        <li onClick={()=>{setMedicinePrescription(false) , setMessageSection(true)}} className='insideli'>Chat</li>
        <li className='insideli'>Uploaded Docs</li>
       </ul>
    </div>

        <hr />
       {medicinePrescription && <MedicinePrescription patientPhoneNum={patientPhoneNum}/>}
       { messageSection && <Messagesection/>}
        {/* <ViewDetails/> */}

    </div>
  )
}

export default ThreeSectionContainer