import React, { useState } from "react"
import MonthCalendar from "./MonthCalendar"
import "./CalendarCarousel-style.css"

function CaledarCarousel() {
  const [shift, setShift] = useState(0)
  const handleShowCalendarFromLeft = () => {
    setShift((prevShift) => prevShift - 1)
    console.log("shift", shift)
  }
  const handleShowCalendarFromRight = () => {
    setShift((prevShift) => prevShift + 1)
    console.log("shift", shift)
  }

  return (
    <div className='carousel-window relative flex flex-row justify-self-center self-center items-center justify-center border-2 border-black '>
      <div
        className='calendar-carousel-left opacity-50 cursor-pointer z-20 border-2 border-teal-400 '
        onClick={() => handleShowCalendarFromLeft()}
      >
        <MonthCalendar shift={shift - 1} />
      </div>
      <div className='calendar-carousel-center desktop:h-[100%] absolute z-30'>
        <MonthCalendar shift={shift} />
      </div>
      <div
        className=' calendar-carousel-right opacity-50 cursor-pointer z-20 border-2 border-teal-400'
        onClick={() => handleShowCalendarFromRight()}
      >
        <MonthCalendar shift={shift + 1} />
      </div>
    </div>
  )
}

export default CaledarCarousel
