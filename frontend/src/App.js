import "./App.css"
import MonthCalendar from "./components/timeDivision/MonthCalendar"

function App() {
  return (
    <div className='App w-full flex flex-row justify-around'>
      {/* <h1 className='text-3xl font-bold  self-auto basis-1 m-2'>Hello</h1>
      <h1 className='text-3xl font-bold  self-auto basis-1 m-2'>SECOND</h1>
      <h1 className='text-3xl font-bold  self-auto basis-1 m-2'>Thrid</h1> */}
      <MonthCalendar />
    </div>
  )
}

export default App
