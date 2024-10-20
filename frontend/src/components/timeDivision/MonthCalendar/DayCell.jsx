import React from "react"
import "./DayCell-style.css"
import "./CalendarCarousel-style.css"

function DayCell({ day }) {
  return (
    <td className='day-cell z-20 '>
      <div className='day-cell-row mobile:h-min text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-400 dark:bg-slate-700 dark:text-sky-100 flex flex-row justify-between'>
        <div className='ml-1'>{day}</div>
        <div className='mr-1'>Num</div>
      </div>
      <div className='day-cell-row mobile:h-min text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-100'>
        1
      </div>
      <div className='day-cell-row mobile:h-min text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-100'>
        2
      </div>
      <div className='day-cell-row mobile:h-min text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-500 dark:text-sky-100'>
        3
      </div>
      <div className='day-cell-row mobile:h-min text-ellipsis overflow-hidden whitespace-nowrap dark:text-cyan-100'>
        4
      </div>
    </td>
  )
}

export default DayCell
