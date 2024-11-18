import React, { useState } from "react"
import "./Day-style.css"

function Day({ day }) {
  const [startTime, setStartTime] = useState("06:15")
  const [endTime, setEndTime] = useState("22:35")
  const [interval, setInterval] = useState(60)

  const generateTimeSlots = () => {
    const startHour = parseInt(startTime.split(":")[0], 10)
    const startMinute = parseInt(startTime.split(":")[1], 10)
    const endHour = parseInt(endTime.split(":")[0], 10)
    const endMinutes = parseInt(endTime.split(":")[2], 10)
    const timeSlots = []

    for (let i = startHour; i <= endHour; i++) {
      let hour = i
      let minutes =
        i === startHour ? startMinute : i === endHour ? endMinutes : 0
      for (let min = minutes; min < 60; min += interval) {
        const time = `${hour.toString().padStart(2, "0")}:${min
          .toString()
          .padStart(2, "0")}`
        timeSlots.push(time)
      }
    }
    return timeSlots
  }
  const timeSlots = generateTimeSlots()

  return (
    <div className='day z-40 p-4'>
      <div className='text-center font-semibold text-xl'>Day</div>
      <div className='w-[100%] h-[100%] overflow-auto p-4'>
        <div className='space-y-1'>
          {timeSlots.map((time, index) => (
            <div key={index} className=''>
              <span>{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Day
