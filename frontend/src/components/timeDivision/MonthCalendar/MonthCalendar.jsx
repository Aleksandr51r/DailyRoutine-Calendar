import React, { useState } from "react"
import WeekLine from "./WeekLine"
import calculateMonthDetails, { namesOfDays } from "./Math/TimeMath"
import { daysOfWeek } from "./TimeConstant/TimeConstants"

function MonthCalendar({
  shift,
  handleOpenDay,
  handleOpenWeek,
  handleChooseDay,
}) {
  // const { months, shiftedDate: dateShifted, date } = getDateShifted(shift)
  const date = new Date()
  const shiftedDate = new Date(date.getFullYear(), date.getMonth() + shift, 1)

  const [monthDetails, setMonthDetails] = useState(
    calculateMonthDetails(shiftedDate)
  )
  const getMonthStatus = (currentDate, shiftedDate) => {
    if (
      currentDate.getFullYear() === shiftedDate.getFullYear() &&
      currentDate.getMonth() === shiftedDate.getMonth()
    ) {
      return "currentMonth"
    } else if (
      currentDate.getFullYear() < shiftedDate.getFullYear() ||
      (currentDate.getFullYear() === shiftedDate.getFullYear() &&
        currentDate.getMonth() < shiftedDate.getMonth())
    ) {
      return "nextMonth"
    } else {
      return "prevMonth"
    }
  }

  const weeksQuantity = Object.keys(monthDetails.weeks).length
  const year = monthDetails.year

  return (
    <>
      <div className='h-full w-full flex flex-col items-center self-center select-none'>
        <div className='text-base  text-center'>
          {monthDetails.nameOfMonth + " " + monthDetails.year}
        </div>
        <table className='w-full h-full table-fixed rounder border-collapse'>
          <thead className='h-1/12 w-full'>
            <tr className='w-full' key={1}>
              {namesOfDays.map((day, index) => (
                // ! : Key problem for first render of calendar in carousel
                <th key={index} className='w-1/7'>
                  <span className='block overflow-hidden text-ellipsis font-normal italic text-xs mobile:text-[8px] tablet:text-xs laptop:text-xs desktop:text-xs  whitespace-nowrap dark:text-cyan-100'>
                    {day}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='h-11/12 w-full dark:bg-slate-600 shadow-2xl shadow-slate-600 overflow-visible relative'>
            {Object.keys(monthDetails.weeks)
              .sort((a, b) => {
                if (monthDetails.weeks[a].year !== monthDetails.weeks[b].year) {
                  return monthDetails.weeks[a].year - monthDetails.weeks[b].year
                }
                return (
                  monthDetails.weeks[a].weekNumber -
                  monthDetails.weeks[b].weekNumber
                )
              })
              .map((week, weekIndex) => (
                <>
                  <div
                    className='week-number italic absolute mobile:text-sm laptop:text-sm shadow-2xl shadow-slate-100'
                    onClick={() => handleOpenWeek()}
                  >
                    {week}
                  </div>
                  <WeekLine
                    key={weekIndex}
                    weeksQuantity={`${weeksQuantity}`}
                    week={monthDetails.weeks[week].daysOfWeek}
                    handleOpenDay={handleOpenDay}
                    handleChooseDay={handleChooseDay}
                    getMonthStatus={() => getMonthStatus(date, shiftedDate)}
                    year={year}
                  />
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MonthCalendar
