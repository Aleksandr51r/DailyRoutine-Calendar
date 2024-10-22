import React, { useState } from "react"
import DayCell from "./DayCell"
import { useSSR } from "react-i18next"

function WeekLine({
  week,
  weeksQnty,
  currentMonth,
  handleCurrentMonth,
  currentCount,
}) {
  const [current, setCurrent] = useState(false)

  return (
    <tr className='relative w-full'>
      {week.map((day, index) => (
        <DayCell
          key={day}
          day={day}
          weeksQnty={`${weeksQnty}`}
          weekend={index >= 5 ? true : false}
          currentMonth={true}
        />
      ))}
    </tr>
  )
}

export default WeekLine
