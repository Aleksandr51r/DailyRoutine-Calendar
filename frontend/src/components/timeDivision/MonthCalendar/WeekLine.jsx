import React from "react"
import DayCell from "./DayCell"

function WeekLine({ week }) {
  return (
    <tr className='border'>
      {week.map((day) => (
        <DayCell key={day} day={day} className='h-full w-1/7' />
      ))}
    </tr>
  )
}

export default WeekLine
