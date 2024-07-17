import React from 'react'
import { useParams } from 'react-router-dom';
import patientData from './RecordOfPatients';
import "./Consultation_right_section.css"
import Right_second_section from './Right_second_section';
import Videocallsection from './Videocallsection';
import Messagesection from './Messagesection';
import {useContext} from 'react';
import userContext from "./userContext"
import MedicinePrescription from './MedicinePrescription';
import ThreeSectionContainer from './ThreeSectionContainer';
function Consultation_right_section({generalCare,criticalList}) {
// Assuming patientData is imported


 
let {user,setUser,allpatientDetail,setallpatientDetail,phoneNum,setPhoneNum} = useContext(userContext)

if(!phoneNum){
  
 var { patientPhoneNum } = useParams();
}else{
  patientPhoneNum = phoneNum;
}
console.log("url: ",patientPhoneNum==null)


// Replace with the phone number you're searching for
const patient = allpatientDetail.find((patient) => {
    const found =parseInt(patient.phoneNumber) === parseInt(patientPhoneNum);
    console.log(parseInt(patientPhoneNum), " == ? ", patient.phoneNumber);
    return found; // Add the return statement here
   });
let diagnosisInfo=''
 
  let  name=''
  let phoneN=''
  
  
  
 if(patient) {
    
     name =    <li>{patient.name}</li>
   phoneN =  <li>{patient.phoneNumber}</li>
    console.log("Patient",patient)
  
  diagnosisInfo = patient.medicalHistory.map((record) => {
   
   console.log("name",record)
   //console.log("phone:",record)
   return (<div className='single-disease-record'>
      
      <li className='date'>{record.date}</li>
      < >{record.diagnosedDiseases.map((disease)=>{return(
          <li className='disease-name'>
            { disease}
          </li>
        )})}</>
      
     
      </div>
    )
  });

  console.log('Diagnosis Information:', diagnosisInfo);
} else {
  //new patient
    console.log("USer ,",user)
    if(patientPhoneNum!=null){
    const PAtien = user.find((patient) => {
        const found = parseInt(patient.phone) === parseInt(patientPhoneNum);
         console.log("Patient :",patient)
         console.log(parseInt(patientPhoneNum), " == ? ", parseInt(patient.phone));
         console.log("Found::",found)
        return found; // Add the return statement here
       });

        console.log("PAtients details:", PAtien)
    
  const newPatient = {
    id:PAtien.phone,
    name:PAtien.name,
    phoneNumber:PAtien.phone,
    medicalHistory: [
      
    ],
    address: PAtien.address,
  };

  setallpatientDetail([...allpatientDetail, newPatient]);

}
}




  return (
    
        <div className="consultation-right-section">
            

          <div className="right-first-section">
             <Videocallsection/>
           
             {/* <MedicinePrescription patientPhoneNum ={patientPhoneNum }/> */}
             <ThreeSectionContainer   patientPhoneNum ={patientPhoneNum }/>
                
          </div>
          
          <div className="right-second-section">

             <Right_second_section name={name} phoneN={phoneN} diagnosisInfo={diagnosisInfo} generalCare={generalCare} criticalList={criticalList} patient={patient}/>

          </div>
          
        </div>

   
  )
}

export default Consultation_right_section