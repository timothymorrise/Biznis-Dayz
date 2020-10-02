import React from 'react'
import Clock from 'react-live-clock'
import moment from 'moment'

const TimesContainer = () => {
    let today = new Date()
    let arizTimeZone = moment(today).isDST() ? "US/Pacific" : "US/Mountain"
    return (
        <div>
            Times container placeholder
         
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Mountain'} />
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} />
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            

        </div>
    )
}

export default TimesContainer
