import React, { useEffect, useState } from "react"
import MonthCalendar from "./MonthCalendar"
import "./CalendarCarousel-style.css"

function CaledarCarousel() {
  const [shift, setShift] = useState(0)

  const calendarStoc = [
    <MonthCalendar key={shift - 2} shift={shift - 2} />,
    <MonthCalendar key={shift - 1} shift={shift - 1} />,
    <MonthCalendar key={shift} shift={shift} />,
    <MonthCalendar key={shift + 1} shift={shift + 1} />,
    <MonthCalendar key={shift + 2} shift={shift + 2} />,
  ]

  const handleShiftCalendar = (direction) => {

      setShift((prevShift) => prevShift + direction)

  }

  return (
    <div className='carousel-window relative flex flex-row justify-self-center self-center items-center justify-center'>
      <div
        className='calendar-carousel-left opacity-50 cursor-pointer z-20  '
        onClick={() => handleShiftCalendar(-1)}
      >
        {calendarStoc[0]}
      </div>
      <div className='calendar-carousel-center absolute z-30 '>
        {calendarStoc[1]}
      </div>
      <div
        className=' calendar-carousel-right opacity-50 cursor-pointer z-20 '
        onClick={() => handleShiftCalendar(+1)}
      >
        {calendarStoc[2]}
      </div>
    </div>
  )
}

export default CaledarCarousel
