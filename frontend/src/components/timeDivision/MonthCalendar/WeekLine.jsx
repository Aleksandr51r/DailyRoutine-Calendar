import React, { useState } from "react"
import DayCell from "./DayCell"

function WeekLine({ week, weeksQnty, handleCurrentMonth, currentMonth }) {

  const [current, setCurrent] = useState(false)

  return (
    <tr className='relative w-full'>
      {week.map((day, index) => (
        <DayCell
          key={day}
          day={day}
          weeksQnty={`${weeksQnty}`}
          weekend={index >= 5 ? true : false}
          currentMonth={currentMonth ? true : false}
          handleCurrentMonth={handleCurrentMonth}
        />
      ))}
    </tr>
  )
}

export default WeekLine
