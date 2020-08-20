import React from 'react'
import moment from 'moment-business-days'

const DateDisplay = (props) => {
    const { date } = props
    const display = moment(date).format("dddd MMMM Do")

    return (
        <div>
            <h1>{display}</h1>
        </div>
    )
}

export default DateDisplay
