import React from "react"

function DayCell({ day }) {
  return (
    <td className='border text-xs  border-stone-600'>
      <div className='h-1/4 block text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-200'>
        {day}
      </div>
      <div className='h-1/4 block text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-200'>
        row1
      </div>
      <div className='h-1/4 block text-ellipsis overflow-hidden whitespace-nowrap border-b border-stone-200'>
        row2
      </div>
      <div className='h-1/4 block text-ellipsis overflow-hidden whitespace-nowrap'>
        row3
      </div>
    </td>
  )
}

export default DayCell
