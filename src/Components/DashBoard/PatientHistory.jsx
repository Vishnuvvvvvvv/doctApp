import React,{useEffect,useState} from 'react'
import "./PatientHistory.css"
import axios from 'axios';
import PatientFullProfile from '../../Patient/PatientFullProfile';

function PatientHistory({username,visitHistory}) {
        username = "doctor1"
    // const [visitHistory, setVisitHistory] = useState([]);
    // const apiUrl = `http://localhost:4000/api/doctor/visitHistory/${username}`;

    // useEffect(() => {
    //     // Fetch the visit history data from the API
    //     axios
    //       .get(apiUrl)
    //       .then((response) => {
    //         setVisitHistory(response.data);
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching visit history:', error);
    //       });
    //   }, [apiUrl]);
    const [patient,Setpatient] = useState()
  
          const apiCall = (patientName)=>{
            const apiUrl = `http://localhost:4000/api/doctor/SpecificPatientDetail/${patientName}`;
            axios.get(apiUrl).then(response=>{
              console.log("Response: ",response.data)
              Setpatient(response.data.patient)
            }).catch(e=>(console.log("Error!",e)))
          }
        const singlePatient = visitHistory.map((item)=>{
            return(<>
            <li onClick={()=>{apiCall(item.name),setOpen(true)}}className='Queuelistitem'>{item.name}         
            <span className='queueDate'>  {item.date} </span> 
          
            </li>
            
            </>)
        })


        const [isOpen,setOpen] = useState(false)




  return (
    <div className='PatientHistory'>
        {singlePatient ? singlePatient : "no data"}
      {patient &&  <PatientFullProfile  isOpen={isOpen} setOpen={setOpen} phoneN={patient} patient={patient} openRightSection={false}/>}
    </div>
  )
}

export default PatientHistory