import React, { useEffect, useState } from "react"
import WeekLine from "./WeekLine"
import calculateMonthDetails, {
  namesOfDays,
  changingMonth,
} from "./Math/TimeMath"

function MonthCalendar({ shift }) {
  const date = new Date()
  const dateShifted = new Date(date.getFullYear(), date.getMonth() + shift, 1)

  const [currentDate, setCurrentDate] = useState(dateShifted)
  const [monthDetails, setMonthDetails] = useState(
    calculateMonthDetails(currentDate)
  )
  const weeksQnty = calculateMonthDetails.weeks

  useEffect(() => {
    setMonthDetails(calculateMonthDetails(currentDate))
  }, [currentDate])

  const handleShowNextMonth = () => {
    setCurrentDate(changingMonth(currentDate, 1))
  }

  const handleShowPreviousMonth = () => {
    setCurrentDate(changingMonth(currentDate, -1))
  }

  return (
    <div className='h-full w-full flex flex-col items-center self-center '>
      <div className='w-20 text-center dark:text-cyan-100'>
        {monthDetails.nameOfMonth}
      </div>
      <table className='w-full h-full table-fixed border-collapse rounder'>
        <thead className='h-1/12'>
          <tr className='w-full '>
            {namesOfDays.map((day, index) => (
              <th key={index} className='w-min w-1/7'>
                <span className=' block overflow-hidden text-ellipsis font-normal italic text-xs mobile:text-[150%] tablet:text-xs laptop:text desktop:text-sm  whitespace-nowrap dark:text-cyan-100'>
                  {day}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='h-11/12 w-full dark:bg-slate-600 shadow-2xl shadow-slate-600 overflow-visible'>
          {Object.keys(monthDetails.weeks).map((_, weekIndex) => (
            <WeekLine
              key={weekIndex}
              className={`h-1/${weeksQnty} w-full`}
              week={monthDetails.weeks[weekIndex]}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MonthCalendar
