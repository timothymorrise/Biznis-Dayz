import React from 'react'
import moment from 'moment-business-days'

const NextBiznisDayDisplay = (props) => {
    let {days, date} = props

    const nextBiznessDay = moment(date).businessAdd(days)._d

    const dayDisplay = days=== null ? "" : moment(nextBiznessDay).format("dddd MMMM Do")

    return (
        <div>
            <h1>{dayDisplay}</h1>
        </div> 
    )
}

export default NextBiznisDayDisplay
