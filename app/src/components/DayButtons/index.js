import React from 'react'
import StyledButton from "./style.js"
import "./style.css"

const DayButtonsContainer = (props) => {
    let {setDays, days} = props

    const handleClick = (e) => {
        e.preventDefault()
        setDays(+e.target.value)
    }

    const buttonValues = [2,3,4,5,6,9,10,20]

    const generateButtons = () => buttonValues.map(x=> {
            let y = ""+x

            return <StyledButton 
                days={""+days} 
                value={y} 
                key={""+y}  
                onClick={handleClick}
                >{y}</StyledButton>
    })

    return (
        <div id="day-button-container">
            {generateButtons()}
        </div>
        
    )
}

export default DayButtonsContainer