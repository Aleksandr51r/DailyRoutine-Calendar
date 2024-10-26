import React, { useEffect, useState } from "react"
import WeekLine from "./WeekLine"
import calculateMonthDetails, { namesOfDays } from "./Math/TimeMath"

function MonthCalendar({ shift }) {
  const [isCurrentMonth, setIsCurrenMonth] = useState(false)
  const date = new Date()
  const dateShifted = new Date(date.getFullYear(), date.getMonth() + shift, 1)
  const [currentDate, setCurrentDate] = useState(dateShifted)
  const [monthDetails, setMonthDetails] = useState(
    calculateMonthDetails(currentDate)
  )
  const weeksQnty = Object.keys(monthDetails.weeks).length
  useEffect(() => {
    setMonthDetails(calculateMonthDetails(currentDate))
  }, [currentDate])

  const handleCurrentMonth = () => {
    setIsCurrenMonth(!isCurrentMonth)
  }

  return (
    <div className='h-full w-full flex flex-col items-center self-center  select-none'>
      <div className='w-50 text-base  text-center'>
        {monthDetails.nameOfMonth + " " + monthDetails.year}
      </div>
      <table className='w-full h-full table-fixed border-collapse rounder'>
        <thead className='h-1/12'>
          <tr className='w-full '>
            {namesOfDays.map((day, index) => (
              <th key={index} className='w-min w-1/7'>
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
                <div className='week-number italic absolute mobile:text-sm laptop:text-sm shadow-2xl shadow-slate-100'>
                  {week}
                </div>

                <WeekLine
                  key={weekIndex}
                  className={`h-1/${weeksQnty} w-full`}
                  weeksQnty={`${weeksQnty}`}
                  week={monthDetails.weeks[week].daysOfWeek}
                />
              </>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MonthCalendar
