
const cors = require('cors')
const { json } = require('express')
const app = require("express")()
const http = require('http').createServer(app)
///import patientData from "./src/RecordOfPatients.jsx"
//const patientData= require('./src/RecordOfPatients.jsx');

const io= require('socket.io')(http,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })

app.use(cors())
app.get('/',(req,res)=>{
    res.send("Backend!")
})

// app.get("/patients",(req,res)=>{
//     // return(JSON.stringify(patientData))
//     res.json(patientData);
// })

const userSocketMap = {};



io.on('connection',socket =>{

    console.log("Connection established",socket.id)


    socket.emit('connection-success',{
        status:'connection-success',
        socketId: socket.id,
    })

    socket.on('disconnect',()=>{
        console.log(`${socket.id} has disconnected!`)
    })


    //video-call functions
    socket.on('sdp',data =>{
        console.log(data)
        //CHANGE-->
        //we'll send the sdp recieved from user1 to user2
        socket.broadcast.emit('sdp',data)
    })

    socket.on('candidate',data=>{
        console.log(data)
        socket.broadcast.emit('candidate',data)
    })

    socket.on('end-call',()=>{
        socket.broadcast.emit('end-call')
    })
//chatting functions

socket.on("set-username",(data)=>{

    console.log("Username in backend",data.username)
    
            userSocketMap[data.username] = socket.id;
    
            console.log(`${data.username} has mapped with user id ${socket.id}`)
            //username got a socket id
            //when we login as either a patient or docotr both 
            //will get unique id
        })


  socket.on("messagefromFrontend",({recievername,message,username})=>{
            console.log("Recievers name in backend",recievername)
            console.log("from:",username," Message:",message)
        const recieverid =   userSocketMap[recievername];
        
        if(recieverid){
            //note io.to().emit() method
            io.to(recieverid).emit('messageFromServer',{message,username,recievername})
        }
        
        
            })


          


})





http.listen(4000,function(){
    console.log("Listening on port 4000!")
})