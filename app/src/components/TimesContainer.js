import React from 'react'
import Clock from 'react-live-clock'

const TimesContainer = () => {
    let 
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
