import React, { useEffect, useState } from "react"
import WeekLine from "./WeekLine"
import calculateMonthDetails, {
  namesOfDays,
  changingMonth,
} from "./Math/TimeMath"

function MonthCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [monthDetails, setMonthDetails] = useState(
    calculateMonthDetails(currentDate)
  )

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
    <div className='flex flex-col items-center '>
      <div className='flex flex-row'>
        <button className='mx-6' onClick={handleShowPreviousMonth}></button>
        <div className='w-20 text-center'>{monthDetails.nameOfMonth}</div>
        <button className='mx-6' onClick={handleShowNextMonth}></button>
      </div>
      <table className='w-9/12 h-3/5 table-fixed  border-collapse'>
        <thead className=''>
          <tr className='h-1/5 border-b-2 border-b-black'>
            {namesOfDays.map((day, index) => (
              <th key={index} className='w-min w-1/7 border-none'>
                <span className='block overflow-hidden text-ellipsis font-normal italic text-xs mobile:text-xs tablet:text-sm laptop:text desktop:text-2xl desktopXL:text-3xl  whitespace-nowrap'>
                  {day}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='h-full'>
          {Object.keys(monthDetails.weeks).map((_, weekIndex) => (
            <WeekLine
              key={weekIndex}
              className='h-1/5'
              week={monthDetails.weeks[weekIndex]}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MonthCalendar
