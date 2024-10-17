import React from "react"
import DayCell from "./DayCell"

function WeekLine({ week }) {

  return (
    <tr>
      {week.map((day) => (
        <DayCell key={day} day={day} />
      ))}
    </tr>
  )
}

export default WeekLine
