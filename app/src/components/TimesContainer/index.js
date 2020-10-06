import React from 'react'
import Clock from 'react-live-clock'
import moment from 'moment'
import "./style.css"

const TimesContainer = () => {
    let today = new Date()
    let arizTimeZone = moment(today).isDST() ? "US/Pacific" : "US/Mountain"

    return (
        <div id="times-container">
            <div className="time-zone-card">
                <h1>PACIFIC TIME</h1>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
            </div>
            <div className="time-zone-card" id="arizona">
                <h1>ARIZONA TIME</h1>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={arizTimeZone} />
            </div>
            <div className="time-zone-card"> 
                <h1>MOUNTAIN TIME</h1>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Mountain'} />
            </div>
            <div className="time-zone-card"> 
                <h1>CENTRAL TIME</h1>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} />
                </div>
            <div className="time-zone-card"> 
                <h1>EASTERN TIME</h1>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
            </div>
         

            
           
            
            
            

        </div>
    )
}

export default TimesContainer
