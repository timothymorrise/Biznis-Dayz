import React, { useEffect } from 'react'
import StyledButton from "./style"

const DayButtonsContainer = (props) => {
    let {setDays, days} = props

    const handleClick = (e) => {
        e.preventDefault()
        setDays(+e.target.value)
    }

    const buttonValues = [2,3,4,5,6,9,10,20]

    const generateButtons = (currentDay) => buttonValues.map(x=> {
            let y = ""+x
            return <StyledButton 
                currentDay={currentDay} 
                value={y} 
                key={""+y}  
                onClick={handleClick}
                >{y}</StyledButton>
    })

    useEffect(()=> )

    return (
        <div>
            {generateButtons(days)}
        </div>
        
    )
}

export default DayButtonsContainer