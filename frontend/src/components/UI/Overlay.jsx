import React from "react"

function Overlay({ onClick }) {
  return (
    <div
      className='absolute w-screen h-screen top-0 left-0 z-30 opacity-40 bg-black blur-md'
      onClick={onClick}
    ></div>
  )
}

export default Overlay
