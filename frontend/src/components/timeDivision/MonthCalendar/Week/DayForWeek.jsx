import React from "react"
import Day from "../Day/Day"
import "./DayForWeek-style.css"

function DayForWeek({ name, index, onClick }) {
  return (
    <div
      className={`day-for-week w-full h-full ml-1 border mobile:text-2px ${
        index >= 5 ? "day-for-week-weekend" : "day-for-week-workday"
      }`}
      onClick={onClick}
    >
      <span className='block overflow-hidden text-ellipsis text-center font-normal italic text-xs mobile:text-[8px] tablet:text-xs laptop:text-xs desktop:text-xs  whitespace-nowrap dark:text-cyan-100'>
        {name}
      </span>
    </div>
  )
}

export default DayForWeek
