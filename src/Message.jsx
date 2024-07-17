import React,{useState,useEffect} from 'react'
import "./Message.css"
import { useParams } from 'react-router-dom';

function Message({message,type,fromWhichUser,toWhichUser}) {
const [currReciepient,setCurrReciepient] = useState();
var { patientPhoneNum } = useParams();

useEffect(()=>{
    
    if(patientPhoneNum){
        setCurrReciepient(patientPhoneNum)
    } 
    



},[patientPhoneNum])

if(message){    
  
if(fromWhichUser == currReciepient || toWhichUser==currReciepient){

if(type==="outgoing"){
    console.log(`${message} :outgoing message`)
}else if(type ==='incomming'){
    console.log(`${message} :incomming message`)
}

  return (<div className='chat_display'>




  {type === "incomming" ? 
  
  <div className='incomming'>
        {message && message}

    </div>
    :
    <div className="outgoing">
        {message && message}
    </div>}
    </div>
  )
}
else return;
}

}
export default Message