import React from 'react'
import bizDays from "business-day-math"

function BiznessDayDate(props) {
    let {days, date} = props

    return (
        <div>
            <h1>{ bizDays(days, date, 'America/Los_Angeles').toString()}</h1>
        </div>
    )
}

export default BiznessDayDate
