import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarDate() {
  // set states of calendar date
  const [calDate, setCalDate] = useState(new Date())

  function onChange (calDate) {
    // change results based on calendar date click
    setCalDate(calDate)
  }

  return (
    <div className="date-calendar">
      <Calendar onChange={onChange} showWeekNumbers value={calDate} />
    </div>
  )
}

export default CalendarDate;