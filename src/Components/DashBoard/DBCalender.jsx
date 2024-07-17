import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./DBCalender.css"
function DBCalendar() {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    // Check if the date is today
    if (view === 'month' && date.getDate() === new Date().getDate() && date.getMonth() == new Date().getMonth && date.getYear() == new Date().getYear()) {
      return 'today'; // Add a CSS class for styling
    }

    return '';
  };
  const calendarStyle = {
    width: '300px', // Customize the width as needed
    height: '300px', // Customize the height as needed
    
  };
  return (
    
      <Calendar className='DB_calender'
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        
      />
 
  );
}

export default DBCalendar;
