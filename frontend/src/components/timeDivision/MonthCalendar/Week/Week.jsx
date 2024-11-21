import React from "react"
import { namesOfDays } from "../Math/TimeMath.js"
import "./Week-style.css"
import DayForWeek from "./DayForWeek"
function Week({ handleOpenDay }) {
  return (
    <div
      className={`absolute week flex flex-row w-[75%] h-[60%]  left-1/2 top-1/2 `}
    >
      {namesOfDays.map((day, index) => (
        <DayForWeek
          key={index}
          name={day}
          onClick={handleOpenDay}
          index={index}
        />
      ))}
    </div>
  )
}

export default Week
