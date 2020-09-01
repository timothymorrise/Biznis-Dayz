import React from 'react'
import moment from 'moment-business-days'
let holidays = []

// Martin Luther King Day, Fourth of July, Memorial Day, Labor Day, Thanksgiving, Christmas

const mLKDays = () => {
    let a = []
    for (let i = 2000; i<3000; i++) {
        let d = new Date(i, 0, 1);
        d.setDate((d.getDate() + (8 - d.getDay()) % 7)+14)
        a.push(moment(d).format("MM-DD-YYYY"))
    }
    return a;
}
// Third monday of January

holidays = [...mLKDays()]

export default holidays