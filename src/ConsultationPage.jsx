import React,{useState} from 'react'
import "./ConsultationPage.css"
import ConsultationNavbar from './ConsultationNavbar'
import Consultation_left_section from './Consultation-left-section';
import Consultation_right_section from './Consultation_right_section';
import DoctorLogin from '../DoctorLogin';
function ConsultationPage({generalCare,criticalList}) {

    const [loadSidebar,setloadSidebar] = useState(true);
    const [showConsultationPage,setShowConsultationPage] = useState(false);

  return (
    <div>
        <header>

        <ConsultationNavbar setloadSidebar={setloadSidebar} loadSidebar={loadSidebar}/>
        </header>
{/* {showConsultationPage==false?
      (  <DoctorLogin setShowConsultationPage={setShowConsultationPage}/>): */}


        <div className="consultation-main-body">

         {/* {loadSidebar?<div className="consultation-left-section ">
                    Hy i am the left section
            </div>:''} */}
            <Consultation_left_section loadSidebar={loadSidebar} />


            <Consultation_right_section generalCare={generalCare} criticalList={criticalList} />


        </div>
        
        {/* } */}
        
    </div>
  )
}

export default ConsultationPage