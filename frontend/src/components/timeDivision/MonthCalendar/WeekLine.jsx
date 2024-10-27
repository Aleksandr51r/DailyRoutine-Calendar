import React, { useState } from "react"
import DayCell from "./DayCell"

function WeekLine({ week, weeksQnty, handleOpenNewDay }) {
  return (
    <tr className={`relative`}>
      {Object.keys(week).map((index) => (
        <DayCell
          key={index}
          day={week[index].day}
          weeksQnty={`${weeksQnty}`}
          weekend={index >= 5 ? true : false}
          currentMonth={week[index].isCurrent}
          handleOpenNewDay={handleOpenNewDay}
        />
      ))}
    </tr>
  )
}

export default WeekLine
