import React from "react"
import "./Overlay-style.css"

function Overlay({ onClick, layOfOverlay }) {
  return (
    <div
      className={`absolute overlay w-full h-full top-0 left-0 ${
        layOfOverlay ? "z-30" : "z-20"
      } bg-slate-900/50`}
      onClick={onClick}
    ></div>
  )
}

export default Overlay
