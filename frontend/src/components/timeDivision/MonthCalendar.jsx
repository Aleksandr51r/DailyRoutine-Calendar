import React from "react"

function MonthCalendar() {
  const daysOfWeek = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  }
  const days = Object.values(daysOfWeek)

  return (
    <table className='table-fixed border border-collapse w-7/12 h-1/2 border-black'>
      <thead className='border-black'>
        <tr className='w-1/7 border-b-2 border-black'>
          {days.map((day, index) => (
            <th key={index} className='w-1/7 border border-black bg-gray-400'>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className=''>

        <tr className='h-24'>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
        </tr>
        <tr className='h-24'>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
        </tr>
        <tr className='h-24'>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
        </tr>
        <tr className='h-24'>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
        </tr>
        <tr className='h-24'>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
          <td className='border border-black'></td>
        </tr>
      </tbody>
    </table>
  )
}

export default MonthCalendar

{
  /* <th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>Friday</th>
<th>Saturday</th>
<th>Sunday</th> */
}
