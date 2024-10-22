import { months, daysOfWeek } from "../TimeConstant/TimeConstants"

function calculateMonthDetails(date) {
  const staticDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const staticPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    1
  ).getMonth()
  const prevMonthLength = months[staticPreviousMonth].days
  const firstDayOfStaticWeek = ((staticDate.getDay() + 6) % 7) + 1 // from wich day week start
  const PreviousMonthStartFromDate =
    prevMonthLength - (firstDayOfStaticWeek - 1)
  const monthLength = months[staticDate.getMonth()].days

  // Calculation to fill weeklines with a all days
  const restOfPrevMonth = Array.from(
    { length: firstDayOfStaticWeek - 1 },
    (_, i) => PreviousMonthStartFromDate + i + 1
  )
  const currentMonth = Array.from({ length: monthLength }, (_, i) => i + 1)

  const quantityWeeks = Math.ceil(
    (restOfPrevMonth.length + currentMonth.length) / 7
  )

  const nextMonth = Array.from(
    {
      length: quantityWeeks * 7 - restOfPrevMonth.length - currentMonth.length,
    },
    (_, i) => i + 1
  )

  const allDays = [...restOfPrevMonth, ...currentMonth, ...nextMonth]
  const lastWeek = Math.floor(
    (restOfPrevMonth.length + currentMonth.length) / 7
  )

  const currentMonthDayStyle = [
    restOfPrevMonth.length,
    currentMonth.length,
    nextMonth.length,
  ]

 

  const weeks = {}
  for (let i = 0; i < quantityWeeks; i++) {
    weeks[i] = allDays.slice(i * 7, i * 7 + 7)
  }

  const year = date.getFullYear()
  return {
    weeks,
    year,
    nameOfMonth: months[date.getMonth()].name,
    currentMonthDayStyle,
  }
}

export const changingMonth = (date, changeMonth) => {
  const newDate = new Date(date)
  newDate.setMonth(date.getMonth() + changeMonth)
  return newDate
}

export const namesOfDays = Object.values(daysOfWeek)
export default calculateMonthDetails
