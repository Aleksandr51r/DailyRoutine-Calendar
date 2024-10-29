import React, { useEffect, useState } from "react"
import "./DayCell-style.css"
import "./CalendarCarousel-style.css"
import Day from "./Day/Day"

function DayCell({
  day,
  weekend,
  currentMonth,
  handleOpenNewDay,
  isPassed,
  isCurrentDay,
  getMonthStatus,
}) {
  console.log("isCurrentDay", isCurrentDay)
  const month = getMonthStatus()
  return (
    <td>
      <div
        className={`day-cell flex flex-col  
          h-full justify-stretch
           ${currentMonth ? "current" : "not-current"} 
           ${weekend && currentMonth ? "week-end" : "work-day"} 

           ${
             month === "prevMonth"
               ? "passed"
               : month === "currentMonth"
               ? isPassed
                 ? "passed"
                 : ""
               : ""
           } 
           ${month === "currentMonth" ? (isCurrentDay ? "today" : "") : ""}`}
        onClick={handleOpenNewDay}
      >
        <div
          className={`day-cell-row text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600  dark:text-sky-100 flex flex-row justify-between`}
        >
          <div className='ml-1'>{day}</div>
          <div className='mr-1'></div>
        </div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-cyan-100`}
        ></div>
      </div>
    </td>
  )
}

export default DayCell
