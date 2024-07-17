import React,{useState} from 'react'
import axios from 'axios';
import PatientFullProfile from '../../Patient/PatientFullProfile';

function GeneralCare({generalCare}) {
  const [patient,Setpatient] = useState()
  const [isOpen,setOpen] = useState(false)


  const apiCall = (patientName)=>{
    const apiUrl = `http://localhost:4000/api/doctor/SpecificPatientDetail/${patientName}`;
    axios.get(apiUrl).then(response=>{
      Setpatient(response.data.patient)
    }).catch(e=>(console.log("Error!",e)))
  }

  const singlePatient =   generalCare.map((item)=>{
        return(<>
        <li onClick={()=>{apiCall(item.name),setOpen(true)}} className='Queuelistitem' >{item.name}</li>
        </>)
    })
  

  return (
    <div className='PatientHistory'>
        {singlePatient ? singlePatient : "no data"}
        {patient &&  <PatientFullProfile  isOpen={isOpen} setOpen={setOpen} phoneN={patient} patient={patient}  openRightSection={true}/>}
    </div>
  )
}

export default GeneralCare