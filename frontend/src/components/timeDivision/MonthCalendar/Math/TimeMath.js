import { months, daysOfWeek } from "../TimeConstant/TimeConstants"

function calculateMonthDetails(date) {
  const staticDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const staticPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    1
  ).getMonth()
  const prevMonthLength = months[staticPreviousMonth].days
  const firstDayOfStaticWeek = ((staticDate.getDay() + 6) % 7) + 1
  const PreviousMonthStartFromDate =
    prevMonthLength - (firstDayOfStaticWeek - 1)
  const monthLength = months[staticDate.getMonth()].days
  const quantityWeeks = Math.ceil(
    (months[staticDate.getMonth()].days + staticDate.getDay() - 1) / 7
  )

  // Calculation to fill weeklines with a all days
  const restOfPrevMonth = Array.from(
    { length: firstDayOfStaticWeek - 1 },
    (_, i) => PreviousMonthStartFromDate + i + 1
  )
  const currentMonth = Array.from({ length: monthLength }, (_, i) => i + 1)

  const nextMonth = Array.from(
    { length: quantityWeeks * 7 - monthLength - (firstDayOfStaticWeek - 1) },
    (_, i) => i + 1
  )
  const allDays = [...restOfPrevMonth, ...currentMonth, ...nextMonth]
  const weeks = {}
  for (let i = 0; i < quantityWeeks; i++) {
    weeks[i] = allDays.slice(i * 7, i * 7 + 7)
  }

  return {
    weeks,
    nameOfMonth: months[date.getMonth()].name,
  }
}

export const changingMonth = (date, changeMonth) => {
  const newDate = new Date(date)
  newDate.setMonth(date.getMonth() + changeMonth)
  return newDate
}

export const namesOfDays = Object.values(daysOfWeek)
export default calculateMonthDetails
