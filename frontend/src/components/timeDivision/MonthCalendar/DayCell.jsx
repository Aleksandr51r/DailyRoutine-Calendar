import React, { useEffect, useState } from "react"
import "./DayCell-style.css"
import "./CalendarCarousel-style.css"
import Day from "./Day/Day"

function DayCell({ day, weekend, currentMonth, handleOpenNewDay }) {
  return (
    <td>
      <div
        className={`day-cell flex flex-col  
          h-full justify-stretch
           ${currentMonth ? "current" : "not-current"} ${
          weekend && currentMonth ? "week-end" : "work-day"
        }`}
        onClick={handleOpenNewDay}
      >
        <div
          className={`day-cell-row text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500  dark:text-sky-100 flex flex-row justify-between`}
        >
          <div className='ml-1'>{day}</div>
          <div className='mr-1'></div>
        </div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-600`}
        ></div>
        <div
          className={`day-cell-row  text-ellipsis overflow-hidden whitespace-nowrap dark:text-cyan-100`}
        ></div>
      </div>
    </td>
  )
}

export default DayCell
