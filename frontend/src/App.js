import "./App.css"
import MonthCalendar from "./components/timeDivision/MonthCalendar/MonthCalendar"
import CaledarCarousel from "./components/timeDivision/MonthCalendar/CaledarCarousel"

function App() {
  return (
    <div className='App dark:bg-slate-800  w-screen h-screen '>
      <div className='w-1/3 h-1/2'>
        <CaledarCarousel />
      </div>
    </div>
  )
}

export default App
