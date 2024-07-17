import React from 'react'
import "./DashBoardLeft.css"
import DashBoardElement from './DashBoardElement'
function DashBoardLeft({visitHistory}) {
  const doctor1Data = visitHistory; // Replace with the actual doctor's data
  console.log("all patient det: ",doctor1Data)
  const currentDate = new Date(); // Get the current date
  
  // Calculate the start and end dates for the current month
  const currentMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const currentMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  console.log("Curr Month: ",currentMonthStartDate)
  // Calculate the start and end dates for the current week (assuming Sunday is the start of the week)
  
  const currentWeekStartDate = new Date(currentDate);
  currentWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay());
  const currentWeekEndDate = new Date(currentWeekStartDate);
  currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);
  
//   console.log("Curr week start:",currentWeekStartDate)
// const currentDay = currentDate.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
// console.log("Cuurent day",currentDay)
// // Calculate the number of days to subtract to reach the start of the week (Monday)
// const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
// //if its 0 --> thats 7th day so we have to subtract 6 days to set to monday
// currentWeekStartDate.setDate(currentDate.getDate() - daysToSubtract);
// console.log("days sub:",daysToSubtract)
// console.log("curr start week 2:",currentWeekStartDate)

// const currentWeekEndDate = new Date(currentWeekStartDate);
// currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);

  
  console.log("Curr Week start: ",currentWeekStartDate)
  console.log("Curr Week End: ",currentWeekEndDate)
  // Calculate the start and end dates for the current day
  const currentDayStartDate = new Date(currentDate);
  currentDayStartDate.setHours(0, 0, 0, 0);
  const currentDayEndDate = new Date(currentDate);
  currentDayEndDate.setHours(23, 59, 59, 999);
  
  // Filter the patient records based on date ranges
  const patientsThisMonth = doctor1Data.filter((record) => {
    const recordDate = new Date(record.date);
    console.log("date",recordDate)
    return recordDate >= currentMonthStartDate && recordDate <= currentMonthEndDate;
  });

  console.log("PAtients this month:",patientsThisMonth )
  
  const patientsThisWeek = doctor1Data.filter((record) => {
    const recordDate = new Date(record.date);
    console.log("is date>=curr Week start date",recordDate,">= ",currentWeekStartDate,"?",recordDate >= currentWeekStartDate)
    return recordDate >= currentWeekStartDate && recordDate <= currentWeekEndDate;
  });
  
  const patientsToday = doctor1Data.filter((record) => {
    const recordDate = new Date(record.date);
    return recordDate >= currentDayStartDate && recordDate <= currentDayEndDate;
  });
  
  console.log(`Patients this month: ${patientsThisMonth.length}`);
  console.log(`Patients this week: ${patientsThisWeek.length}`);
  console.log(`Patients today: ${patientsToday.length}`);
  
  const firstbox = {
    // background: "linear-gradient(90deg,#004AAD,#CB6CE6)"
    background:' linear-gradient(90deg, rgb(185 215 255), rgb(194 144 208))'
}
const secondBox = {
    // background: 'linear-gradient(90deg,#8C52FF,#5CE1E6)'
    background: 'linear-gradient(297deg, rgb(134 106 189), rgb(214 214 255))'
    
}
const thirdBox = {
    // background: 'linear-gradient(90deg,#004AAD,#CB6CE6)'
    background: 'linear-gradient(90deg, rgb(252 233 255), rgb(135 68 255))'
}
const fourthBox = {
    // background: 'linear-gradient(90deg,#5DE0E6,#004AAD)'
    background: 'linear-gradient(90deg, rgb(165 98 250), rgb(185 204 231))'
   
}

  return (
    <div className='DashBoardLeft_container'>

       < DashBoardElement  number={visitHistory.length} heading={"Total Patients"} style={firstbox} />

       < DashBoardElement  number={patientsThisMonth.length} heading={"Monthly Count"}  style={secondBox}/>
       < DashBoardElement number={patientsThisWeek.length} heading={"Weekly count"} style={thirdBox}/>
       < DashBoardElement number={patientsToday.length} heading={"Daily count"} style={fourthBox}/>
    </div>
  )
}

export default DashBoardLeft