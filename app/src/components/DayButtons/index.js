import React from 'react'
import StyledButton from "./style"

const DayButtonsContainer = (props) => {
    let {setDays} = props

    const handleClick = (e) => {
        e.preventDefault()
        setDays(+e.target.value)
    }

    const buttonValues = [2,3,4,5,6,9,10,20]

    const generateButtons = () => buttonValues.map(x=> {
            let y = ""+x
            return <StyledButton 
                value={y}
                key={""+y} 
                onClick={handleClick}
                >{y}</StyledButton>
    })

    return (
        <div>
            {generateButtons()}
        </div>
        
    )
}

export default DayButtonsContainer