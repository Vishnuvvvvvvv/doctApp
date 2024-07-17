// // App.js
import "./App.css"
import {React,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeNavbar from './Components/HomePageComponents/HomeNavbar';
import ConsultationNavbar from './ConsultationNavbar';
import HomePage from './Components/HomePageComponents/HomePage';
import ConsultationPage from './ConsultationPage';
import userContext from './userContext';
import {datas} from './Data';
import patientData from "./RecordOfPatients"
import NewDupli from './newDupli';
import PatientUI from './PatientUI';
import PatientQueue from "./PatientQueue";
import PAtientQueue from "../src/Patient/PAtientQueue"
import LoginPAge from "./Patient/LoginPAge";

import io from 'socket.io-client';
import DashBoardHome from "./Components/DashBoard/DashBoardHome";
const socket = io.connect('http://localhost:4000');

function App() {
  const [username,setUsername] = useState("")
  const [recievername,Setrecievername] = useState("")
  const [message,setMessage] = useState('')
  const [recievedMessage,setRecievedMessage] = useState([])
  const[allmeassages,setAllmessages] = useState([  {
    msg: '',
    typ: '',
    fromWhichUser:'',
    toWhichUser:'',
  }])



  const [phoneNum,setPhoneNum] = useState()
  const [user, setUser] =useState(datas)
  const [allpatientDetail,setallpatientDetail] = useState(patientData)
  console.log("me:",user)
  const [generalCare,setGeneralCare] = useState([])
    const [criticalList, setCriticalList] = useState([]);
  return (
    <userContext.Provider value={{allmeassages,setAllmessages,message,setMessage,user,setUser,allpatientDetail,setallpatientDetail,phoneNum,setPhoneNum,username,setUsername,socket,recievername,Setrecievername}}> {/* Wrap your component tree with UserProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Consultation/:patientPhoneNum" element={<ConsultationPage generalCare={generalCare} criticalList={criticalList}/>} />
          <Route path="/Consultation" element={<ConsultationPage generalCare={generalCare} criticalList={criticalList} />} />
          <Route path="/new" element={<NewDupli/>} />
          
          <Route path='/patientui' element={<LoginPAge/>}/>
          <Route path='/patientQueue' element={<PAtientQueue/>}/>
           
           <Route path='/consultDoctor' element={<PatientUI/>} />
           <Route path='/DashBoard' element={<DashBoardHome username={username} generalCare={generalCare} setGeneralCare={setGeneralCare} criticalList={criticalList} setCriticalList={setCriticalList}/>} />
          {/* <Route path='/Videocallsection' element={<Videocallsection/>}/> */}
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomeNavbar from './HomeNavbar';
// import ConsultationNavbar from './ConsultationNavbar';
// import HomePage from './HomePage';
// import ConsultationPage from './ConsultationPage';
// import { UserProvider } from './UserContext';

// function App() {
//   return (
 
//     <Router>
//       < Routes>
//         <Route path="/"  element={<HomePage/>} />
//         <Route path="/consultation"  element={<ConsultationPage/>} />
//       </ Routes>
//     </Router>

//   );
// }

// export default App;
