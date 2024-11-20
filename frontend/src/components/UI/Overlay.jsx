import React from "react"
import "./Overlay-style.css"

function Overlay({ onClick }) {
  return (
    <div
      className={`absolute overlay w-full h-full top-0 left-0 z-20 bg-slate-900/50`}
      onClick={onClick}
    ></div>
  )
}

export default Overlay
