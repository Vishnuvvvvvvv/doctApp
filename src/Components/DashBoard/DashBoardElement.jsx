import React from 'react'
import "./DashBoardElement.css"
function DashBoardElement({number,heading,style}) {

        // let content = <h1></h1>
        // style={{backgroundColor:`${backgroundColor}`}} 
      
      

  return (
    <div className='DashBoardElement' style={style}>

       <h1 className='DashBoard_heading1'>{number}</h1> 
      
       <h5 className='DashBoard_heading2'>{heading} </h5> 
    </div>
  )
}

export default DashBoardElement