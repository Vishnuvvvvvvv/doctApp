import React,{useState} from 'react'
import "./DisplayPatientSection.css"
import PatientHistory from './PatientHistory'
import CriticalCare from './CriticalCare'
import GeneralCare from './GeneralCare'
import PatientFullProfile from '../../Patient/PatientFullProfile'
function DisplayPatientSection({username,criticalList,setCriticalList,generalCare,setGeneralCare,visitHistory}) {
  const [allpatientHisory,setallpatientHistory] = useState(true)
  const [CriticalCarePatients,setCriticalCarePatients] = useState(false)
  const [GeneralCarePatients,setGeneralCarePatients] = useState(false)
  const [RareDeseasedPatients,setRareDeseasedPatients] = useState(false)
  //const [isOpen,setOpen] = useState()
  // const [generalCare,setGeneralCare] = useState([])
  return (
    <div className='DisplayPatientSection'>
        {/* {singlePatient ? singlePatient : "no data"} */}
      <div className="display-section-heading">
         <div onClick={()=>{setallpatientHistory(true),setGeneralCarePatients(false),setCriticalCarePatients(false),setGeneralCarePatients(false),setRareDeseasedPatients(false)}} className="div">All Patients</div>
         <div onClick={()=>{setallpatientHistory(false),setGeneralCarePatients(false),setCriticalCarePatients(true),setGeneralCarePatients(false),setRareDeseasedPatients(false)}}className="div">Critical Care</div>
         <div onClick={()=>{setallpatientHistory(false),setGeneralCarePatients(false),setCriticalCarePatients(false),setGeneralCarePatients(true),setRareDeseasedPatients(false)}}className="div">General Care</div>
         <div className="div">Rare Diseased</div>
         <div>Filter</div>
         <div>Search</div>
         
      </div>
      {allpatientHisory&&<PatientHistory username={username} visitHistory={visitHistory} ></PatientHistory>}
      {CriticalCarePatients&&<CriticalCare criticalList={criticalList}/>}
    {GeneralCarePatients&&<GeneralCare generalCare={generalCare}/>}



    {/* <PatientFullProfile  isOpen={isOpen} setOpen={setOpen} /> */}
    </div>
  )
}

export default DisplayPatientSection;