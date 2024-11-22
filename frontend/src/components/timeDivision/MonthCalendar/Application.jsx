import React, { useState } from "react"
import CalendarCarousel from "./CalendarCarousel"
import Day from "./Day/Day"
import Overlay from "../../UI/Overlay"
import Week from "./Week/Week"

function Application() {
  const [isDayIsOpen, setIsDayIsOpen] = useState(false)
  const [isWeekIsOpen, setIsWeekIsOpen] = useState(false)
  const [whichDayIsOpen, setWhichDayIsOpen] = useState(null)
  const handleOpenDay = () => {
    setIsDayIsOpen(true)
  }
  const handleCloseDay = () => {
    setIsDayIsOpen(false)
  }
  const handleOpenWeek = () => {
    setIsWeekIsOpen(true)
  }

  const handleChooseDay = (date) => {
    setWhichDayIsOpen()
  }

  return (
    <>
      {isWeekIsOpen ? (
        <>
          <Overlay
            onClick={() => {
              setIsWeekIsOpen(false)
            }}
          />
          <Week handleOpenDay={handleOpenDay} />
        </>
      ) : null}
      {isDayIsOpen ? (
        <>
          <Overlay
            onClick={() => handleCloseDay()}
            layOfOverlay={isWeekIsOpen ? true : false}
          />
          <Day handleCloseDay={handleCloseDay}/>
        </>
      ) : null}
      <div className={`h-full w-full`}>
        <CalendarCarousel
          handleOpenDay={handleOpenDay}
          handleOpenWeek={handleOpenWeek}
          handleChooseDay={handleChooseDay}
        />
      </div>
    </>
  )
}

export default Application

// // test
// * test
// ! test
// ? test
// TODO Atention !! class for week schedule and day are same !!