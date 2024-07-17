import React, { useEffect, useState } from 'react';
import "./ConnectPeer.css"
function ConnectPeer() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
      // Make an API call when the component mounts
      fetch('http://localhost:4000/api/doctors')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
          // Update the state with the fetched data
          setDoctors(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 

    const singleDoctor = doctors.map((doctor,index)=> {
      if(index<4){
      return <>
        <div className="card-group" key={doctor.id}>
  <div className="card">
    <img  width="120px" height="130px"src="https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h3 className="card-title">{doctor.name}</h3>
      <p className="card-text">{doctor.specialty}</p>
      <p className="card-text"><small class="text-body-secondary">{doctor.hospital}</small></p>
    </div>
  </div>
        </div>
        
        </>}
      })








  return (
    <div className='connect_peer_container'>
        
        <h1 style={{marginLeft:'28px' ,color:'blueviolet',fontFamily:'monospace'}} > Connect </h1>  
 <div className='doctor-section'>
      
      {singleDoctor}
      
    </div>
      

    </div>
  )
}

export default ConnectPeer