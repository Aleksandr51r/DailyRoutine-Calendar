import React, { useEffect, useState } from "react"
import "./DayCell-style.css"
import "./CalendarCarousel-style.css"

function DayCell({
  day,
  weeksQnty,
  weekend,
  currentMonth,
  handleCurrentMonth,
}) {
  const [isWeekEnd, setIsWeekEnd] = useState(weekend)
  
  return (
    <td
      className={`day-cell z-20 ${currentMonth ? "current" : "not-current"} ${
        isWeekEnd ? "week-end" : "work-day"
      }`}
    >
      <div
        className={`day-cell-row h-1/${weeksQnty} text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-400 dark:bg-slate-700 dark:text-sky-100 flex flex-row justify-between`}
      >
        <div className='ml-1'>{day}</div>
        <div className='mr-1'></div>
      </div>
      <div
        className={`day-cell-row  h-1/${weeksQnty} text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-600`}
      ></div>
      <div
        className={`day-cell-row  h-1/${weeksQnty} text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-600`}
      ></div>
      <div
        className={`day-cell-row  h-1/${weeksQnty} text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-600`}
      ></div>
      <div
        className={`day-cell-row  h-1/${weeksQnty} text-ellipsis overflow-hidden whitespace-nowrap dark:text-cyan-100`}
      ></div>
    </td>
  )
}

export default DayCell
