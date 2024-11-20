import React, { useState } from "react"
import CalendarCarousel from "./CalendarCarousel"
import Day from "./Day/Day"
import Overlay from "../../UI/Overlay"

function Application() {
  const [isDayIsOpen, setIsDayIsOpen] = useState(false)
  const [whichDayIsOpen, setWhichDayIsOpen] = useState(null)
  const handleOpenNewDay = () => {
    setIsDayIsOpen(true)
  }
  const handleChooseDay = (date) => {
    setWhichDayIsOpen()
  }
  return (
    <>
      {isDayIsOpen ? (
        <>
          <Overlay
            onClick={() => {
              setIsDayIsOpen(false)
            }}
          />
          <Day />
        </>
      ) : null}
      <div className={`h-full w-full`}>
        <CalendarCarousel
          handleOpenNewDay={handleOpenNewDay}
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

