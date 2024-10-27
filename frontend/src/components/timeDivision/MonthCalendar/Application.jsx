import React, { useState } from "react"
import CaledarCarousel from "./CaledarCarousel"
import Day from "./Day/Day"
import Overlay from "../../UI/Overlay"

function Application() {
  const [isDayISopen, setIsdayIsOpen] = useState(false)
  const handleOpenNewDay = () => {
    setIsdayIsOpen(true)
  }
  return (
    <>
      {isDayISopen ? (
        <>
          <Overlay
            onClick={() => {
              setIsdayIsOpen(false)
            }}
          />
          <Day />
        </>
      ) : null}
      <div>
        <CaledarCarousel handleOpenNewDay={handleOpenNewDay} />
      </div>
    </>
  )
}

export default Application
