import React, {useState} from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

const CalendarContainer = (props) => {

    const changeDate = (nextDate) => {
        props.setDate(nextDate.toString())
    }

    return (
        <Calendar
            onChange={changeDate}
            value={new Date(props.date)}
        />
    );
}

export default CalendarContainer
