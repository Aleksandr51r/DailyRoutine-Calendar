import React, { useState } from "react"
import DayCell from "./DayCell"

function WeekLine({
  week,
  weeksQuantity,
  handleOpenNewDay,
  getMonthStatus,
  year,
  handleChooseDay,
}) {
  console.log("week", week)
  // * for Mozila size bug
  const mozilaSizeDayCell = { 4: 25, 5: 20, 6: 16.66 }
  const weekHeight = mozilaSizeDayCell[weeksQuantity] || 20

  return (
    <tr className={` w-full relative`} style={{ height: `${weekHeight}%` }}>
      {Object.keys(week).map((index) => (
        <DayCell
          key={index}
          day={week[index].day}
          weeksQuantity={`${weeksQuantity}`}
          weekend={index >= 5 ? true : false}
          currentMonth={week[index].isCurrent}
          handleOpenNewDay={handleOpenNewDay}
          isPassed={week[index].isPassed}
          isCurrentDay={week[index].currentDay}
          getMonthStatus={getMonthStatus}
          handleChooseDay={handleChooseDay}
          year={year}
          month={week[index].month}
        />
      ))}
    </tr>
  )
}

export default WeekLine
