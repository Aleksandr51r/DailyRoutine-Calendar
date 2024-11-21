import React, { useState, useCallback } from "react"
import "./Day-style.css"

function Day({ day }) {
  const [startTime, setStartTime] = useState("05:30")
  const [endTime, setEndTime] = useState("22:30")

  const parseTime = useCallback((time) => {
    const [hour, minute] = time.split(":").map(Number)
    return { hour, minute }
  }, [])
  // TODO Close button
  const generateTimeSlots = useCallback(() => {
    const { hour: startHour, minute: startMinute } = parseTime(startTime)
    const { hour: endHour, minute: endMinutes } = parseTime(endTime)
    const timeSlots = []

    let currentHour = startHour
    let currentMinute = startMinute

    while (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute <= endMinutes)
    ) {
      const time = `${currentHour.toString().padStart(2, "0")}:${currentMinute
        .toString()
        .padStart(2, "0")}`
      timeSlots.push(time)

      currentMinute += 30
      currentMinute =
        currentMinute >= 30 && currentMinute < 60
          ? 30
          : // TODO : issue with a last hour minutes
          currentHour === endHour - 1
          ? 60
          : currentMinute
      if (currentMinute >= 60) {
        currentMinute = 0
        currentHour += 1
      }
    }

    return timeSlots
  }, [startTime, endTime, parseTime])

  const timeSlots = generateTimeSlots()
  const longerOfDay = timeSlots.length

  return (
    <div className={` day z-40 p-4`}>
      <div className='w-[100%] h-[100%] overflow-auto p-4'>
        <div className='text-center font-semibold text-xl h-[5%]'>Day</div>
        <div className='text-center font-semibold text-xl h-[5%]'>
          day of week
        </div>
        <div className='text-right h-[90%] flex flex-col'>
          {timeSlots.map((time, index) => {
            const minutes = parseInt(time.split(":")[1], 10)
            const lineWidth =
              minutes === 0
                ? "mobile:w-1/2 laptop:w-1/3"
                : minutes === 30
                ? "mobile:w-1/5 laptop:w-1/6"
                : "w-1/12"
            return (
              <div
                key={index}
                className='flex flex-row time-slot w-full'
                style={{ height: `${100 / longerOfDay}%` }}
              >
                <span className={`line ${lineWidth}`}></span>
                <span
                  className={`text-right time-line ml-1 
                    ${minutes === 0 ? "full-hour" : "partial-hour"}

                    `}
                >
                  {minutes === 0 ? time.split(":")[0] : time}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Day
