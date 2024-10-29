import React, { useState } from "react"
import DayCell from "./DayCell"

function WeekLine({ week, weeksQnty, handleOpenNewDay,getMonthStatus }) {
  return (
    <tr className={`h-1/${weeksQnty} w-full relative`}>
      {Object.keys(week).map((index) => (
        <DayCell
          key={index}
          day={week[index].day}
          weeksQnty={`${weeksQnty}`}
          weekend={index >= 5 ? true : false}
          currentMonth={week[index].isCurrent}
          handleOpenNewDay={handleOpenNewDay}
          isPassed={week[index].isPassed}
          isCurrentDay={week[index].currentDay}
          getMonthStatus={getMonthStatus}
        />
      ))}
    </tr>
  )
}

export default WeekLine
