import React,{useEffect,useState} from 'react'
import "./PatientHistory.css"
import axios from 'axios';
import PatientFullProfile from '../../Patient/PatientFullProfile';

function CriticalCare({criticalList}) {
  const [patient,Setpatient] = useState()
  const [isOpen,setOpen] = useState(false)

  const apiCall = (patientName)=>{
    console.log("Tr?",isOpen)
    const apiUrl = `http://localhost:4000/api/doctor/SpecificPatientDetail/${patientName}`;
    axios.get(apiUrl).then(response=>{
      console.log("Response",response.data.patient)
      Setpatient(response.data.patient)
    }).catch(e=>(console.log("Error!",e)))
  }


        // username = "doctor1"
    // const [criticalList, setCriticalList] = useState([]);
    // const apiUrl = `http://localhost:4000/api/doctor/CriticalList/${username}`;

    // useEffect(() => {
    //     // Fetch the visit history data from the API
    //     axios
    //       .get(apiUrl)
    //       .then((response) => {
    //         setCriticalList(response.data.criticalList);
    //         setGeneralCare(response.data.generalList)
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching visit history:', error);
    //       });
    //   }, [apiUrl]);

        const singlePatient = criticalList.map((item)=>{
            return(<>
            <li onClick={()=>{setOpen(true),apiCall(item.name)}} className='Queuelistitem' >{item.name}</li>
            
            </>)
        })

  return (
    <div className='PatientHistory'>
        {singlePatient ? singlePatient : "no data"}
        {patient &&  <PatientFullProfile  isOpen={isOpen} setOpen={setOpen} phoneN={patient} patient={patient} openRightSection={true}/>}
    </div>
  )
}

export default CriticalCare;