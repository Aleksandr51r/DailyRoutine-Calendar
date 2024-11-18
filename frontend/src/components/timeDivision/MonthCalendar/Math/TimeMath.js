import { getDateShifted, daysOfWeek } from "../TimeConstant/TimeConstants"

// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.net/how-to/javascript

function calculateMonthDetails(date) {
  const months = getDateShifted(date).months
  // Returns the ISO week of the date.

  Date.prototype.getWeek = function () {
    const date = new Date(this.getTime())
    date.setHours(0, 0, 0, 0)
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4)
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return (
      1 +
      Math.round(
        ((date.getTime() - week1.getTime()) / 86400000 -
          3 +
          ((week1.getDay() + 6) % 7)) /
          7
      )
    )
  }
  // Returns the four-digit year corresponding to the ISO week of the date.
  Date.prototype.getWeekYear = function () {
    const date = new Date(this.getTime())
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
    return date.getFullYear()
  }

  const staticDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const currentDate = new Date()
  const staticPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    1
  )

  const prevMonthLength = months[staticPreviousMonth.getMonth()].days
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

  const previousMonthObjects = restOfPrevMonth.reduce((obj, day) => {
    return {
      ...obj,
      [day]: {
        day,
        month: months[staticPreviousMonth.getMonth()].name,
        isCurrent: false,
        isPassed: true,
      },
    }
  }, {})

  const currentMonthObjects = currentMonth.reduce((obj, day) => {
    return {
      ...obj,
      [day]: {
        day,
        month: months[staticDate.getMonth()].name,
        isCurrent: true,
        isPassed: day < currentDate.getDate() ? true : false,
        currentDay: currentDate.getDate() === day,
      },
    }
  }, {})

  const nextMonthObjects = nextMonth.reduce((obj, day) => {
    return {
      ...obj,
      [day]: {
        day,
        month: months[staticDate.getMonth() + 1]?.name,
        isCurrent: false,
        isPassed: false,
      },
    }
  }, {})

  const allDayss = {
    prev: { ...previousMonthObjects },
    current: { ...currentMonthObjects },
    next: { ...nextMonthObjects },
  }
  const allDays = [
    ...Object.values(previousMonthObjects),
    ...Object.values(currentMonthObjects),
    ...Object.values(nextMonthObjects),
  ]

  // const allDays = [...restOfPrevMonth, ...currentMonth, ...nextMonth]

  const weeksArr = []
  for (let i = 0; i < quantityWeeks; i++) {
    weeksArr.push(allDays.slice(i * 7, i * 7 + 7))
  }

  const weeks = {}

  for (let i = 0; i < quantityWeeks; i++) {
    const daysOfWeek = weeksArr[i]
    const firstDay = daysOfWeek[0].day
    // const days = {}
    // for (let j = 0; j < 7; j++) {
    //   const day = daysOfWeek[j].day
    //   days[day] = daysOfWeek[j]
    // }
    const monthOffset = firstDay === 1 ? 0 : i === 0 ? -1 : 0 // To add a previous month
    const month = date.getMonth() + monthOffset
    const year = date.getFullYear()
    const currentDayDate = new Date(year, month, firstDay)
    const weekNumber = currentDayDate.getWeek()
    const currenMonth = currentDayDate.getMonth()

    weeks[weekNumber] = {
      daysOfWeek,
      month: months[month] ?? months[0], // Problem of dec-jan
      year:
        currentDayDate.getFullYear() +
        (currenMonth === 2 ? 0 : currenMonth + weekNumber === 12 ? 1 : 0),
    }
  }

  const year = date.getFullYear()
  return {
    weeks,
    year,
    nameOfMonth: months[date.getMonth()].name,
    quantityWeeks,
  }
}

export const changingMonth = (date, changeMonth) => {
  const newDate = new Date(date)
  newDate.setMonth(date.getMonth() + changeMonth)
  return newDate
}

export const namesOfDays = Object.values(daysOfWeek)
export default calculateMonthDetails
