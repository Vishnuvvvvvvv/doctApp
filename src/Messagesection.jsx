import React ,{useContext}from 'react'
import "./Messagesection.css"
import userContext from './userContext';
import Message from './Message';

function Messagesection() {

  let {username,allmeassages,setAllmessages,message,setMessage,socket,recievername} = useContext(userContext)



const clickyyy = ()=>{
  const usernameToSend = username;
  console.log("Send clicked1")
  console.log("cur msg:",message);
  console.log("Reciever name: ",recievername)
  setAllmessages((prevMessages) => [
    ...prevMessages,
    { msg: message, typ: 'outgoing',fromWhichUser:usernameToSend ,toWhichUser:recievername},
  ]);
  socket.emit("messagefromFrontend",
  {recievername,message,username: usernameToSend })
}


const sendMessage = ()=>{
  console.log("Send clicked")
  // const usernameToSend = username;
  setAllmessages((prevMessages) => [
    ...prevMessages,
    { msg: message, typ: 'outgoing' },
  ]);


  socket.emit("messagefromFrontend",
  {recievername,message,username: usernameToSend }

  )

  console.log("receiver: ",recievername,"message: ",message)
}

let messageDiv = allmeassages.map((message)=>{
  console.log("Message1; ",message)
  return(
    <div><Message message={message.msg} type={message.typ} fromWhichUser={message.fromWhichUser} toWhichUser={message.toWhichUser}/></div>
  )
}) 

  return (<>
    <div className="Messagesection">

   

      
      {messageDiv}
      
     
    </div>
     <div className="type_section">
     <input className='inputField' type="text" name="" placeholder="Send a message" id=""value={message} onChange={(e)=>{setMessage(e.target.value)}} />
     
     <button className="MsgBtn"onClick={()=>{clickyyy()}}>send</button>
     </div>
     </>
  )
}

export default Messagesection