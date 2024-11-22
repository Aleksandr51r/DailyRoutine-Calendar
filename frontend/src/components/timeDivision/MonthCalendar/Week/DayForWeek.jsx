import React from "react"
import Day from "../Day/Day"
import "./DayForWeek-style.css"

function DayForWeek({ name, index, onClick }) {
  const timeModules = [
    "night",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
    "night",
  ]
  return (
    <div
      className={`day-for-week ml-1 w-full  mobile:h-[60%] laptop:h-full`}
      onClick={onClick}
    >
      <span className='block mb-1 overflow-hidden text-ellipsis text-center font-normal italic text-[8px] laptop:text-xs  whitespace-nowrap dark:text-cyan-100'>
        Date
      </span>
      <div
        className={`w-full h-[95%] mobile:text-2px ${
          index >= 5 ? "day-for-week-weekend" : "day-for-week-workday"
        }`}
      >
        <span className='block mb-1 overflow-hidden text-ellipsis text-center font-normal italic text-[6px] laptop:text-xs whitespace-nowrap dark:text-cyan-100'>
          {name}
        </span>
        {timeModules.map((hour, inx) => (
          <div
            className={`w-full h-[12.5%] time-slot flex flex-row mobile:text-[5px] laptop:text-[14px] text-cyan-600`}
          >
            <span className={`${hour != "night" ? "line" : null} w-full ml-1`}>
              {" "}
            </span>
            <span className={`time-line mx-1`}>
              {hour != "night" ? hour : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DayForWeek
