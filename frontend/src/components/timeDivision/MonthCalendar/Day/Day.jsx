import React, { useState } from "react"
import "./Day-style.css"

function Day({ day }) {
  const [startTime, setStartTime] = useState("06:15")
  const [endTime, setEndTime] = useState("23:00")
  const [interval, setInterval] = useState(30)

  const generateTimeSlots = () => {
    const startHour = parseInt(startTime.split(":")[0], 10)
    const startMinute = parseInt(startTime.split(":")[1], 10)
    const endHour = parseInt(endTime.split(":")[0], 10)
    const endMinutes = parseInt(endTime.split(":")[1], 10)
    const timeSlots = []

    // TODO : 1) Make a minutes like 30/0
    // TODO : 2) Make an object time module
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
  console.log("timeSlots", timeSlots)
  const longerOfDay = timeSlots.length
  return (
    <div className={` day z-40 p-4`}>
      <div className='w-[100%] h-[100%] overflow-auto p-4'>
        <div className='text-center font-semibold text-xl h-[5%]'>Day</div>
        <div className='text-center font-semibold text-xl h-[5%]'>
          day of week
        </div>
        <div className='text-right h-[90%] flex flex-col'>
          {timeSlots.map((time, index) => (
            <div
              key={index}
              className='flex flex-row time-slot'
              style={{ height: `${100 / longerOfDay}%` }}
            >
              <span
                className={`line w-${
                  parseInt(time.split(":")[1], 10) == "00"
                    ? "1/2"
                    : "30"
                    ? "1/3"
                    : "15"
                    ? "1/2"
                    : ""
                } `}
              ></span>
              <span className='text-right time-line ml-1 mobile:text-[6px] tablet:text-[10px] laptop:text-[8px]'>
                {time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Day
