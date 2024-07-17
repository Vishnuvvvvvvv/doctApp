import React, { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

import userContext from '../userContext';
import { useLocation } from 'react-router-dom'; 
import HomeNavbar from '../Components/HomePageComponents/HomeNavbar';
const QueueComponent = () => {

 // const [userPhone, setUserPhone] = useState('');
 const { user, setUser, allpatientDetail, setallpatientDetail,phoneNum,setPhoneNum} = useContext(userContext);
 const location = useLocation();
const [isUserTurn,setIsUserTurn] = useState(false)
  const userPhoneFromState = location.state.userPhone;
// <Link to={`/consultation/${userPhoneFromState}`}> 


  useEffect(() => {
    // Check if it's the user's turn whenever queue or userPhone changes
    console.log("Top phone:",user[0].phone )
    console.log("Entered phone:", parseInt(userPhoneFromState))
    if ( user.length > 0 &&  parseInt(user[0].phone) ===  parseInt(userPhoneFromState)) {
      setIsUserTurn(true);
    } else {
      setIsUserTurn(false);
    }
  }, []);

  const navigate = useNavigate(); // Get the history object for navigation

  const handleSubmit = () => {
    // Add the patient details to the queue
    
    // Redirect to the other page
    // history.push({
    //     pathname: '/patientQueue', // Replace with the actual route
    //     state: { userPhone },
    //   });; // Replace 'other-page' with the actual route
 
      navigate('/');
    };

    const consultDoctor =()=>{
        navigate('/consultDoctor');
        setPhoneNum(userPhoneFromState)
    }

  return (
    <div>
        <HomeNavbar/>
      {/* <input
        type="text"
        placeholder="Enter your phone number"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      /> */}
      {isUserTurn ? (<>
        
        <button onClick={consultDoctor}>Call Now</button>
        </> ) : (
        <h2>Wait for Your Turn</h2>
      )}

<button onClick={handleSubmit}>Goback!</button>
    </div>
  );


};

export default QueueComponent;
