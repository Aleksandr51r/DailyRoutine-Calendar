import React, { useEffect, useState } from "react"
import MonthCalendar from "./MonthCalendar"
import "./CalendarCarousel-style.css"

function CalendarCarousel({ handleOpenNewDay, handleChooseDay }) {
  const [shift, setShift] = useState(0)

  const calendarStock = [
    <MonthCalendar key={shift - 1} shift={shift - 1} />,
    <MonthCalendar
      key={shift}
      shift={shift}
      handleOpenNewDay={handleOpenNewDay}
      handleChooseDay={handleChooseDay}
    />,
    <MonthCalendar key={shift + 1} shift={shift + 1} />,
  ]

  const handleShiftCalendar = (direction) => {
    setShift((prevShift) => prevShift + direction)
  }

  return (
    <div className='carousel-window relative flex flex-row justify-self-center self-center items-center justify-center'>
      <div
        className='calendar-carousel-left opacity-50  cursor-pointer z-0  '
        onClick={() => handleShiftCalendar(-1)}
      >
        {calendarStock[0]}
      </div>
      <div className='calendar-carousel-center absolute z-10 '>
        {calendarStock[1]}
      </div>
      <div
        className='calendar-carousel-right opacity-50 cursor-pointer z-0 '
        onClick={() => handleShiftCalendar(+1)}
      >
        {calendarStock[2]}
      </div>
    </div>
  )
}

export default CalendarCarousel
