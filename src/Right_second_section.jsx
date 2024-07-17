import React,{useEffect, useState} from 'react'
import "./Right_second_section..css"
import axios from 'axios';
import patientData from './RecordOfPatients';
import { useParams } from 'react-router-dom';
import PatientFullProfile from './Patient/PatientFullProfile';

function Right_second_section({name,phoneN,diagnosisInfo,patient}) {
  const nn = name;
  var { patientPhoneNum } = useParams();
  var [addToCriticalListClicked, setAddToCriticalListClicked] = useState(false);
  var [addToGeneralQueueClicked, setAddToGeneralQueueClicked] = useState(false);
  var [criticalListHeading,setCriticalListHeading] = useState("Add to Critical Care")
  var [GeneralCareHeading,setGeneralCareHeading] = useState("Add to General Care")
  const [generalCare,setGeneralCare] = useState([])
  const [criticalList,setCriticalList] = useState([])
  const username="doctor1"
  const apiUrl = `http://localhost:4000/api/doctor/CriticalList/${username}`;
  
  useEffect(()=>{ 
    if(name){
    /***
     * when we change the screen to another patient then we should check if that patient is already added to any of critical or general queue
     * if he is already added, then for that corresponding queue, mark as true and set heading as added;
     * if its not in any of queue then set both as false and set both heading as added;
     */

//name.props.children



   
    axios
      .get(apiUrl)
      .then((response) => {
        setCriticalList(response.data.criticalList);
        setGeneralCare(response.data.generalList)
      })
      .catch((error) => {
        console.error('Error fetching visit history:', error);
      });



     





console.log("name again:",name.props.children)
console.log(generalCare)

if (generalCare.some(item => item.name === name.props.children)) {
  console.log("present in genral Care")
  setAddToGeneralQueueClicked(true);
  setGeneralCareHeading("Added");
  setAddToCriticalListClicked(false);
  setCriticalListHeading("Add to Critical Care");
}
// Check if name.props.children is in criticalList
else if (criticalList.some(item => item.name === name.props.children)) {
  console.log("present in gcriticalCare")
  setAddToCriticalListClicked(true);
  setCriticalListHeading("Added");
  setAddToGeneralQueueClicked(false);
  setGeneralCareHeading("Add to General Care");
}
// If not found in either array
else {
  console.log("not present in any Care")
  setAddToCriticalListClicked(false);
  setAddToGeneralQueueClicked(false);
  setCriticalListHeading("Add to Critical Care");
  setGeneralCareHeading("Add to General Care");
}
    }
}, [name]);

    const [doctorName,setDoctorname]=useState("doctor1");
  
    console.log("name:",name,"phone:",phoneN,"d")
    // Handle click events for adding to critical list and general queue
   const  handleAddToCriticalList = (e) => {
      e.preventDefault();
      console.log("GeneralCareHeading===false",GeneralCareHeading == false)
      console.log("Gen care: ",GeneralCareHeading)
      if(criticalListHeading==='Add to Critical Care' && addToGeneralQueueClicked===false)
     { setCriticalListHeading("Added")
     setAddToCriticalListClicked(true);
     setAddToGeneralQueueClicked(false);
      
     const newPatientData = {
      name: name.props.children,
      
    };
    console.log("Payload",newPatientData)
    console.log("type: ",typeof(newPatientData))
  
    //sending the data to server 
    axios
      .post(`http://localhost:4000/api/doctor/addToCriticalList/${doctorName}`, newPatientData)
      .then((response) => {
        console.log("Patient added to critical list:", response.data);
        // You can update the UI or take other actions here
      })
      .catch((error) => {
        console.error("Error adding patient:", error);
      });
  
      }
     else if(criticalListHeading === "Added"){
      setCriticalListHeading("Add to Critical Care")
      setAddToCriticalListClicked(false);
     }
      // Add the logic to add to the critical list array here
    };
  
  const  handleAddToGeneralQueue = () => {
      const newPatientData = {
        name: name.props.children,
        
      };
     console.log("HEading is here: ",GeneralCareHeading)
      // Add the logic to add to the general queue array here
      if(GeneralCareHeading === 'Add to General Care' && addToCriticalListClicked===false)
       {
       console.log("Clicked with :",GeneralCareHeading)
       setGeneralCareHeading("Added")
       console.log("new head: ",GeneralCareHeading)
  
      setAddToCriticalListClicked(false);
      setAddToGeneralQueueClicked(true);
    //Send post request to server adding the patient to general queue;    
     axios.post(`http://localhost:4000/api/doctor/AddToGeneralList/${doctorName}`,newPatientData).then((response)=>{
      console.log("res: ",response.data)
     }).catch((e)=>{
      console.log("Error!",e)
     })
        
  
    
    }
      else if(GeneralCareHeading === "Added" ){
        setGeneralCareHeading("Add to General Care")
        setAddToGeneralQueueClicked(false);
      }
  
  
  
    };
  
    console.log("new head out: ",GeneralCareHeading)
    console.log("nn :",nn)
  

  // const [addToCriticalListClicked, setAddToCriticalListClicked] = useState(false);
  // const [addToGeneralQueueClicked, setAddToGeneralQueueClicked] = useState(false);
  // const [criticalListHeading,setCriticalListHeading] = useState("Add to Critical Care")
  // const [GeneralCareHeading,setGeneralCareHeading] = useState("Add to General Care")
  
    const [isOpen,setOpen] = useState()
  return (
    <>
         <div className="current-patient-details">
           <button onClick = {()=>{setOpen(!isOpen)}}className='view-profile'>View Full Profile</button>
               
             

               <div className="basic-info">
                    <div className="photo-section">
                            <img className = "prof_pic" height="83%" width="76%" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                    </div>

                      <div className="name-phone-section">
                     <h4 className='h-name'> {name}</h4>
                      <h4 className='h-phone'>{phoneN}</h4>
                        
                        </div>    
              
                </div>
              
                
             
        
           {/* Facility section */}
      <div className="facility-section">
        <div
          className={`facility-option ${
            addToCriticalListClicked ? 'active' : ''
          }`}
          onClick={handleAddToCriticalList}
        >
          <h5>{criticalListHeading}</h5>
        </div>
        <div
          className={`facility-option ${
            addToGeneralQueueClicked ? 'active' : ''
          }`}
          onClick={handleAddToGeneralQueue}
        >
          <h5>{GeneralCareHeading}</h5>
        </div>
      </div>

      </div>
          <hr className='hr_sep'/>
          <div className='diagnosisInfo'>
          {diagnosisInfo}
          </div>
          <PatientFullProfile isOpen={isOpen} setOpen={setOpen} phoneN={phoneN} patient={patient} openRightSection={true}/>
    </>
  )
}

export default Right_second_section;