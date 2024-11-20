import React, { useEffect, useState } from "react"
import "./DayCell-style.css"
import "./CalendarCarousel-style.css"
import Day from "./Day/Day"

function DayCell({
  day,
  month,
  weekend,
  currentMonth,
  handleOpenNewDay,
  isPassed,
  isCurrentDay,
  weeksQuantity,
  getMonthStatus,
  handleChooseDay,
  year,
}) {
  const monthStatus = getMonthStatus(day)
  // const dayCellDate = new Date(year, month, day)
  // onClick={() => handleChooseDay()}
  return (
    <td>
      <div
        className={`day-cell flex flex-col
          h-[100%] justify-stretch
           ${currentMonth ? "current" : "not-current"} 
           ${weekend && currentMonth ? "week-end" : "work-day"} 
           ${
             monthStatus === "prevMonth"
               ? "passed"
               : monthStatus === "currentMonth"
               ? isPassed
                 ? "passed"
                 : ""
               : ""
           } 
           ${
             monthStatus === "currentMonth" ? (isCurrentDay ? "today" : "") : ""
           }`}
        onClick={handleOpenNewDay}
      >
        <div
          className={`day-cell-row h-1/5 text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600  dark:text-sky-100 flex flex-row justify-between`}
        >
          <div className='ml-1'>{day}</div>
          <div className='mr-1'></div>
        </div>
        <div
          className={`day-cell-row  h-1/5 text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  h-1/5 text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  h-1/5 text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-600 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row h-1/5  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-cyan-100`}
        ></div>
      </div>
    </td>
  )
}

export default DayCell
