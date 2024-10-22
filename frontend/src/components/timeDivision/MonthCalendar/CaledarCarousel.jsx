import React, { useEffect, useState } from "react"
import MonthCalendar from "./MonthCalendar"
import "./CalendarCarousel-style.css"
import Slider from "react-slick"

function CaledarCarousel() {
  const [shift, setShift] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    console.log(shift)
  }, [shift])

  const calendarStoc = [
    <MonthCalendar key={shift - 2} shift={shift - 2} />,
    <MonthCalendar key={shift - 1} shift={shift - 1} />,
    <MonthCalendar key={shift} shift={shift} />,
    <MonthCalendar key={shift + 1} shift={shift + 1} />,
    <MonthCalendar key={shift + 2} shift={shift + 2} />,
  ]

  const handleShiftCalendar = (direction) => {
  
    setExiting(true) // Установите exiting в true, чтобы инициировать анимацию выхода

    setTimeout(() => {
      setShift((prevShift) => prevShift + direction)
      setExiting(false) // Сбросьте exiting после завершения анимации
    }, 500) // Длительность анимации
  }

  return (
    <div className='carousel-window relative flex flex-row justify-self-center self-center items-center justify-center border-2 border-black '>
      <div
        className='calendar-carousel-left opacity-50 cursor-pointer z-20 border-2 border-teal-400 '
        onClick={() => handleShiftCalendar(-1)}
      >
        {calendarStoc[0]}
      </div>
      <div className='calendar-carousel-center absolute z-30'>
        {calendarStoc[1]}
      </div>
      <div
        className=' calendar-carousel-right opacity-50 cursor-pointer z-20 border-2 border-teal-400'
        onClick={() => handleShiftCalendar(+1)}
      >
        {calendarStoc[2]}
      </div>
    </div>
  )
}

export default CaledarCarousel
