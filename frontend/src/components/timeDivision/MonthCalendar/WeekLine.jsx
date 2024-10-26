import React, { useState } from "react"
import DayCell from "./DayCell"

function WeekLine({ week, weeksQnty, handleCurrentMonth, currentMonth }) {
  const [current, setCurrent] = useState(false)

  return (
    <tr className='relative w-full'>
      {Object.keys(week).map((index) => (
        <DayCell
          key={index}
          day={week[index].day}
          weeksQnty={`${weeksQnty}`}
          weekend={index >= 5 ? true : false}
          currentMonth={week[index].isCurrent}
        />
      ))}
    </tr>
  )
}

export default WeekLine
