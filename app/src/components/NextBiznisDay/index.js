import React from 'react'
import moment from 'moment-business-days'
import { holidays } from "./holidays"
import "./style.css"

const NextBiznisDayDisplay = (props) => {
    moment.updateLocale('us', {
        holidays: [...holidays],
        holidayFormat: 'MM-DD-YYYY'
     });

    let {days, date} = props

    const nextBiznessDay = moment(date).businessAdd(days)._d

    const dayDisplay = days=== null ? "" : moment(nextBiznessDay).format("dddd MMMM Do")

    return (
        <div>
            <h1 id="h1-day-display">{dayDisplay}</h1>
        </div> 
    )
}

export default NextBiznisDayDisplay
