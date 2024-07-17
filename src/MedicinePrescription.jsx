import React, { useState } from 'react'
import {useContext} from 'react';
import "./MedicinePrescription.css"
import userContext from './userContext';
function MedicinePrescription({patientPhoneNum }) {
  let [desease1,setdisease1] = useState();
  let [desease2,setdisease2] = useState();
  let [desease3,setdisease3] = useState();
  let {user,setUser,allpatientDetail,setallpatientDetail} = useContext(userContext)


  /* 
  let submitform = (e)=>{
    e.preventDefault()
 

  const personToUpdate = allpatientDetail.find(person => person.phoneNumber === parseInt(patientPhoneNum));

  if (personToUpdate) {

  const newMedicalEntry = {
    date: new Date().toISOString().split('T')[0], // Today's date
    diagnosedDiseases:   prescription.map(item => item.disease),
    medicinesPrescribed:   prescription.flatMap(item => item.medicines),
    doctorConsulted: 'Your Doctor\'s Name', // Replace with the actual doctor's name
  };

       console.log("New med Entry:",newMedicalEntry)
       personToUpdate.medicalHistory.push(newMedicalEntry);
       
  console.log(`Added disease and medicine information to ${personToUpdate.name}'s medical history.`);
    }

  }
**/

let submitform = (e) => {
  e.preventDefault();
    console.log("Form submitted!")
  const personToUpdateIndex = allpatientDetail.findIndex(person => person.phoneNumber === parseInt(patientPhoneNum));
//cerating copy of arr
  if (personToUpdateIndex !== -1) {
    const updatedPatientDetail = [...allpatientDetail];
    const newMedicalEntry = {
      date: new Date().toISOString().split('T')[0],
      diagnosedDiseases: prescription.map(item => item.disease),
      medicinesPrescribed: prescription.flatMap(item => item.medicines),
      doctorConsulted: 'Your Doctor\'s Name', // Replace with the actual doctor's name
    };

    updatedPatientDetail[personToUpdateIndex].medicalHistory.push(newMedicalEntry);
     //updating that copied array
    setallpatientDetail(updatedPatientDetail);
    //lastly setting with new array
    console.log(`Added disease and medicine information to ${updatedPatientDetail[personToUpdateIndex].name}'s medical history.`);
  }
}
//gpt things-->
const [prescription, setPrescription] = useState([
  { disease: '', medicines: [''] }, // Initial empty row
]);

 












const addMedicine = (index) => {
  const newPrescription = [...prescription];
  newPrescription[index].medicines.push('');
  setPrescription(newPrescription);
};

const handleDiseaseChange = (index, newValue) => {
  const newPrescription = [...prescription];
  newPrescription[index].disease = newValue;
  setPrescription(newPrescription);
};

const handleMedicineChange = (diseaseIndex, medicineIndex, newValue) => {
  const newPrescription = [...prescription];
  newPrescription[diseaseIndex].medicines[medicineIndex] = newValue;
  setPrescription(newPrescription);
};

const addDiseaseRow = () => {
  setPrescription([...prescription, { disease: '', medicines: [''] }]);
};
//---->

  return (<>
        
    <div className='Medical-prescription-section'>
      {/* <h2>
        Prescribe Sheet
      </h2>
      <hr /> */}

      <form onSubmit={submitform}>
    {/**gpt things----> */}
    {prescription.map((item, diseaseIndex) => (
        <div className="outer-prescription-row" key={diseaseIndex}>
          <div className='pres-inner-row'>
          <input className="input_medicine"
            type="text"
            placeholder="Enter Disease"
            value={item.disease}
            onChange={(e) => handleDiseaseChange(diseaseIndex, e.target.value)}
          />
         </div>
        <div className='med-inner-row'>
          {item.medicines.map((medicine, medicineIndex) => (
            <div key={medicineIndex}>
              <input className="input_medicine"
                type="text"
                placeholder="Enter Medicine"
                value={medicine}
                onChange={(e) =>
                  handleMedicineChange(diseaseIndex, medicineIndex, e.target.value)
                }
              />
            </div>
          ))}
          <button className='medBtn' onClick={() => addMedicine(diseaseIndex)} type="button">+</button>
          </div>
        </div>
      ))}
      <button className='DisBtn1' onClick={addDiseaseRow} type="button">Add Disease Row</button>
      {/**------> */}    
                <br />
      <button className='DisBtn2'  type="submit">Submit</button>  
      </form>
      
    </div>
    </>
  )
}

export default MedicinePrescription