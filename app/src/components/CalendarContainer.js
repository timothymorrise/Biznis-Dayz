import React, {useState} from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

const CalendarContainer = (date) => {
    const [value, setValue] = useState({date: date})

    function onChange(nextValue) {
        setValue(nextValue);
    }

    return (
        <Calendar
            onChange={onChange}
            value={value}
        />
    );
}

export default CalendarContainer
