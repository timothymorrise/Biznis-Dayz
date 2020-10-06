import React from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

const CalendarContainer = (props) => {
    let {date, setDate} = props

    const changeDate = (nextDate) => {
        setDate(nextDate.toString())
    }

    return (
        <div>
        <Calendar
            onChange={changeDate}
            value={new Date(date)}
        />
        
        </div>
        
    );
}

export default CalendarContainer
