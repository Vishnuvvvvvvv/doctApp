import React from 'react'
import "./Videocallsection.css"
import { useEffect, useRef, useState } from 'react'
//import io from 'socket.io-client';
import userContext from './userContext';
import {useContext} from "react"

//const socket = io.connect('http://localhost:4000');  




const Videocallsection = () => {
  let {setAllmessages,message,setMessage,user,setUser,allpatientDetail,setallpatientDetail,socket} = useContext(userContext)
// //chatting
// const [message,setMessage] = useState('')
// const [recievedMessage,setRecievedMessage] = useState([])
// const[allmeassages,setAllmessages] = useState([  {
//   msg: '',
//   typ: '',
// },])
// //finish


  // const deleteTopPerson = () => {
  //   // Create a copy of the datas array without the first person
  //   const newDatas = user.slice(1);
  //   setUser(newDatas);
  // };

   const localVideoRef = useRef();
  //const localVideoRef =null;
  const remoteVideoRef = useRef();
  const pc =useRef(new RTCPeerConnection(null))
  const textRef = useRef()

  //const candidates = useRef([])
  const [offerVisible,setOfferVisible] = useState(true)
  const [answerVisible,setAnswerVisible] = useState(false)
  const [status,setStatus] = useState('Make a call now')


  //Call button handling--end,hold,video off
  const [callActive, setCallActive] = useState(false);
  const [callOnHold, setCallOnHold] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  useEffect(()=>{
  
    socket.on('connection-success',success=>{
      console.log(success)})
      //GETTING OFFER FROM 
      //or getting answer
      socket.on('sdp',data=>{
        console.log(data)
        pc.current.setRemoteDescription(new RTCSessionDescription(data.sdp))
        textRef.current.value = JSON.stringify(data.sdp)
      
        if(data.sdp.type ==='offer')
      {
        setOfferVisible(false)
        setAnswerVisible(true)
        setStatus('Incomming call ...')      }
        else{
          setStatus('call established')
        }


      })

      socket.on('candidate',candidate=>{
        console.log(candidate)
        pc.current.addIceCandidate(new RTCIceCandidate(candidate))

       // candidates.current = [...candidates.current,candidate]
      })

      socket.on('end-call', () => {
        // Reload the page
        console.log("Ended -->relaoding")
        window.location.reload();
      });

    const constraints =  {
      audio:false,
      video:true,
    }
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {

      localVideoRef.current.srcObject = stream

      stream.getTracks().forEach(track=>{
        _pc.addTrack(track,stream)
      })
    }).catch((e)=>{
      console.log('get usermedia error ..',e)
    })

   

   //peer connnection 
// peer connection setup
const _pc = new RTCPeerConnection(null);

_pc.onicecandidate = (e) => {
  if (e.candidate) {
    console.log('Local candidate:', JSON.stringify(e.candidate));
    socket.emit('candidate',e.candidate)
  }
};

_pc.oniceconnectionstatechange = (e) => {
  console.log('ICE connection state change:', e.target.iceConnectionState);
};

_pc.ontrack = (e) => {
  console.log('ontrack event fired.');
  if (e.streams && e.streams[0]) {
    remoteVideoRef.current.srcObject = e.streams[0];
  }
};

pc.current = _pc;


//chatting handling

socket.on('messageFromServer',({message,username,recievername})=>{


  console.log("Message from serve",message)

  console.log("from wheer username :",username)
//  setRecievedMessage((prevMesg)=>[...prevMesg,message])
  setAllmessages((prevMessages) => [
    ...prevMessages,
    { msg: message, typ: 'incomming',fromWhichUser:username,toWhichUser:recievername},
  ]);
})
},[socket])

const sendToPeer = (eventType,payload) =>{
  socket.emit(eventType,payload)
}

const proccessSdp = (sdp)=>{
  console.log(JSON.stringify(sdp))
    pc.current.setLocalDescription(sdp)

    sendToPeer('sdp',{sdp})
    // //send sdp to the server
    // socket.emit('sdp',{
    //   sdp,
    // })
}

const createOffer = ()=>{
  pc.current.createOffer({
    offerToReceiveAudio:1,
    offerToReceiveVideo:1,
  }).then((sdp)=>{
    setOfferVisible(false)
    setStatus("Calling..")
    proccessSdp(sdp)
  }).catch((e)=>console.log(e))
}

const createAnswer=()=>{
  pc.current.createAnswer({
    offerToReceiveAudio:1,
    offerToReceiveVideo:1,

  }).then((sdp)=>{
    proccessSdp(sdp)
    setAnswerVisible(false)
    setStatus("Call Established")
  }).catch((e)=>console.log(e))

  setCallActive(true)

  console.log("Active state:",callActive)
}

const setRemoteDescription=()=>{
  //get sdp from text area
  const sdp = JSON.parse(textRef.current.value)
  console.log(sdp)
  pc.current.setRemoteDescription(new RTCSessionDescription(sdp))


}

const addCandidate = ()=>{
  // const candidate = JSON.parse(textRef.current.value)
  // console.log("Adding candidate...",candidate)
candidates.current.forEach(candidate=>{
  console.log(candidate)
  pc.current.addIceCandidate(new RTCIceCandidate(candidate))
})
  
  console.log("Finished")
}

const endCall = () => {
  pc.current.close();
  console.log("End btn clicked!")
  // localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
  // remoteVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
  // localVideoRef.current.srcObject = null;
  // remoteVideoRef.current.srcObject = null;
  setCallActive(false);
  setCallOnHold(false);
  setVideoOff(false);
    // Emit a signal to inform the other user that the call is ending
    socket.emit('end-call');
  //window.location.reload();
  // ... any other cleanup or state reset you need ...
 
};

const toggleHold = () => {
  setCallOnHold(!callOnHold);
};

const toggleVideo = () => {
  if (localVideoRef.current.srcObject) {
    setVideoOff(!videoOff);
    localVideoRef.current.srcObject.getVideoTracks().forEach(track => track.enabled = videoOff);
    
  }
};


const showHideButton =  ()=>{
  if (callActive) {
    return (
      <div>
        <button  className='buttonv' onClick={endCall}>End Call</button>
        <button className='buttonv' onClick={toggleHold}>{callOnHold ? 'Resume' : 'Hold'}</button>
        <button className='buttonv' onClick={toggleVideo}>{videoOff ? 'On Video' : 'Off Video'}</button>
      </div>
    );
  } 
  else if(offerVisible){
    return(
     <div>
      <button className='buttonv' onClick={createOffer}>Call</button>
     
     </div>

    )
  }else if(answerVisible){
  return ( <div>

    <button className='buttonv' onClick={createAnswer}>Accept Code</button>
    <button className='buttonv' onClick={endCall}>End Call</button>
    </div>)
  }
}


//const [showRemoteVideo, setShowRemoteVideo] = useState(false); // Add state to control remote video visibility

  // ... (existing code)
  const [isWide, setIsWide] = useState(false);

  const handleButtonClick = () => {
    setIsWide(prevState => !prevState);
  };

  return (
    <>
      {/* <button onClick={handleButtonClick}>Toggle Width</button> */}
     <div className='top-main-container'>
  
    <div className='main-container'>
   
    <video  className="video-container1" ref={localVideoRef} autoPlay></video>
     
  
    {/* <videoElement ref={localVideoRef} /> */}
  
 
 <video className="video-container2" ref={remoteVideoRef} autoPlay></video>



   </div>
   <div className="btn-container">

   {showHideButton()}
   
   </div>
   </div>
   
   
{/* 
  <button onClick={createOffer}>Create Offer</button> */}
  {/* <button onClick={createAnswer}>Create Answer</button> */}

{/* <div className="other-content">
<div>{status}</div>
<textarea ref={textRef}></textarea>
</div> */}

{/* <button onClick={setRemoteDescription}>Set Remote Description</button>
<button onClick={addCandidate}>Add Candidates</button> */}


  </>
  );
};

export default Videocallsection;
