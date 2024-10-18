import React, { useState } from "react"
import MonthCalendar from "./MonthCalendar"

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
    <div className='relative h-5/6 w-9/12 flex flex-row justify-self-center self-center items-center justify-center'>
      <div
        className='h-4/6 w-4/6 opacity-50 cursor-pointer  border-2 border-teal-400 '
        style={{
          transform:
            "perspective(700px) scale(1.3) rotateY(-45deg) translateX(-50%)",
        }}
        onClick={() => handleShowCalendarFromLeft()}
      >
        <MonthCalendar shift={shift - 1} />
      </div>
      <div className='absolute h-[110%] w-9/12 z-50 '>
        {" "}
        <MonthCalendar shift={shift} />
      </div>
      <div
        className='h-4/6 w-4/6 opacity-50 cursor-pointer z-40 border-2 border-teal-400'
        style={{
          transform:
            "perspective(700px) scale(1.3) rotateY(45deg) translateX(50%)",
        }}
        onClick={() => handleShowCalendarFromRight()}
      >
        <MonthCalendar shift={shift + 1} />
      </div>
    </div>
  )
}

export default CaledarCarousel
