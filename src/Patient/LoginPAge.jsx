import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import userContext from '../userContext';
import HomeNavbar from '../Components/HomePageComponents/HomeNavbar';

function LoginPage() {
  const { user, setUser, allpatientDetail, setallpatientDetail } = useContext(userContext);

  const [userPhone, setUserPhone] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate(); // Get the history object for navigation

  const handleSubmit = () => {
    // Add the patient details to the queue
    const newPatient = {id:userPhone, name: userName, phone: userPhone };
    setUser([...user,newPatient]);
      console.log("User updated in Login  page: ",user)
    // Redirect to the other page
    // history.push({
    //     pathname: '/patientQueue', // Replace with the actual route
    //     state: { userPhone },
    //   });; // Replace 'other-page' with the actual route
 
      navigate('/patientQueue', { state: { userPhone } });
    };

  return (
    <div>
        <HomeNavbar />
      <input
        type="text"
        placeholder="Enter your phone number"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LoginPage;
