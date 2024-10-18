import "./App.css"
import MonthCalendar from "./components/timeDivision/MonthCalendar/MonthCalendar"
import CaledarCarousel from "./components/timeDivision/MonthCalendar/CaledarCarousel"

function App() {
  return (
    <div className='App w-screen h-screen flex relative justify-center items-center z-50'>
      <CaledarCarousel />
    </div>
  )
}

export default App
