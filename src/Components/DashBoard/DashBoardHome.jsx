import React,{useState,useEffect} from 'react'
import HomeNavbar from '../HomePageComponents/HomeNavbar'
import DashBoardLeft from './DashBoardLeft'
import DashBoardNavbar from './DashBoardNavbar'
import "./DashBoardHome.css"
import DBCalendar from "./DBCalender"
import PatientAnalysis from './PatientAnalysis'
import DisplayPatientSection  from './DisplayPatientSection'
import axios from 'axios'
function DashBoardHome({username,generalCare,setGeneralCare,criticalList, setCriticalList}) {
    username ="doctor1"
    // const [generalCare,setGeneralCare] = useState([])
    // const [criticalList, setCriticalList] = useState([]);
    const [visitHistory, setVisitHistory] = useState([]);

    const apiUrl = `http://localhost:4000/api/doctor/CriticalList/${username}`;

    useEffect(() => {
        // Fetch the visit history data from the API
        axios
          .get(apiUrl)
          .then((response) => {
            setCriticalList(response.data.criticalList);
            setGeneralCare(response.data.generalList)
          })
          .catch((error) => {
            console.error('Error fetching visit history:', error);
          });



          axios
          .get(`http://localhost:4000/api/doctor/visitHistory/${username}`)
          .then((response) => {
            setVisitHistory(response.data);
          })
          .catch((error) => {
            console.error('Error fetching visit history:', error);
          });
    




      }, [apiUrl]);

      


  return (
    <>
    <div  className='DashBoardHome'>
            <DashBoardNavbar/>
            {/* <HomeNavbar/> */}

            <div className="dashB-main-container">
            <DashBoardLeft visitHistory={visitHistory}/>

                <div className="dashB-right-container">
                    
                    <div className="dashB_top_container">
                            <PatientAnalysis/>
                            <DBCalendar/>
                    </div>
                    <div className="dashB-bottom-container">
                            <DisplayPatientSection username={username} criticalList={criticalList} setCriticalList={setCriticalList}  generalCare={generalCare} setGeneralCare={setGeneralCare} visitHistory={visitHistory}/>
                    </div>


                </div>

            </div>
          



    </div>
    </>
  )
}

export default DashBoardHome