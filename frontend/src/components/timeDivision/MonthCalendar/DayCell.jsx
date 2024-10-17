import React from "react"

function DayCell({ day }) {
  return (
    <td className='border border-black h-1/5'>
      <div className='block text-ellipsis overflow-hidden whitespace-nowrap'>
        {day}
      </div>
      <div className='block text-ellipsis overflow-hidden whitespace-nowrap'>
        row1
      </div>
      <div className='block text-ellipsis overflow-hidden whitespace-nowrap'>
        row2
      </div>
      <div className='block text-ellipsis overflow-hidden whitespace-nowrap'>
        row3
      </div>
    </td>
  )
}

export default DayCell
