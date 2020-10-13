import React from 'react'

const TodayButton = (props) => {
    
    const { setDate } = props



    const handleClick = () => {
        let date = new Date()
        setDate(date.toString())
    }

    return (
        <div>
            <button id="today-button" onClick={handleClick}>
                TODAY
            </button>
        </div>
    )
}

export default TodayButton
