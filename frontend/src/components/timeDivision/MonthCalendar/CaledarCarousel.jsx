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
        className='h-3/5 w-3/6 opacity-50 cursor-pointer z-20 border-2 border-teal-400 '
        style={{
          transform:
            "perspective(700px) scale(1.4) rotateY(-45deg) translateX(-70%)",
        }}
        onClick={() => handleShowCalendarFromLeft()}
      >
        <MonthCalendar shift={shift - 1} />
      </div>
      <div className='absolute h-100%] mobile:w-[120%]  z-30'>
        <MonthCalendar shift={shift} />
      </div>
      <div
        className='h-3/5 w-3/6 opacity-50 cursor-pointer z-20 border-2 border-teal-400'
        style={{
          transform:
            "perspective(900px) scale(1.4) rotateY(45deg) translateX(70%)",
        }}
        onClick={() => handleShowCalendarFromRight()}
      >
        <MonthCalendar shift={shift + 1} />
      </div>
    </div>
  )
}

export default CaledarCarousel
