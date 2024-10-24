import { months, daysOfWeek } from "../TimeConstant/TimeConstants"

// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.net/how-to/javascript

function calculateMonthDetails(date) {
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

  const weeksNumber = Object.keys(months).slice()

  const whichWeek = 0

  const nextMonth = Array.from(
    {
      length: quantityWeeks * 7 - restOfPrevMonth.length - currentMonth.length,
    },
    (_, i) => i + 1
  )

  // const previousMonthObjects = restOfPrevMonth.reduce((obj, day) => {
  //   return {
  //     ...obj,
  //     [day]: { isCurrent: false },
  //   }
  // }, {})

  // const currentMonthObjects = currentMonth.reduce((obj, day) => {
  //   return {
  //     ...obj,
  //     [day]: { isCurrent: true },
  //   }
  // }, {})

  // const nextMonthObjects = nextMonth.reduce((obj, day) => {
  //   return {
  //     ...obj,
  //     [day]: { isCurrent: false },
  //   }
  // }, {})

  // const allDayss = {
  //   ...previousMonthObjects,
  //   ...currentMonthObjects,
  //   ...nextMonthObjects,
  // }

  const allDays = [...restOfPrevMonth, ...currentMonth, ...nextMonth]
  console.log("allDays", allDays)

  const weeksArr = []
  const weeks = {}
  for (let i = 0; i < quantityWeeks; i++) {
    weeksArr.push(allDays.slice(i * 7, i * 7 + 7))
  }
  for (let i = 0; i < quantityWeeks; i++) {
    // Получаем массив дней текущей недели
    const daysOfWeek = weeksArr[i]

    // Пропускаем пустые недели
    if (daysOfWeek.length === 0) {
      continue
    }

    // Определяем номер недели для первого дня текущей недели
    const firstDay = daysOfWeek[0]
    console.log("firstDay", firstDay)

    // Определяем месяц в зависимости от первого дня
    const monthOffset = firstDay === 1 ? 0 : i === 0 ? -1 : 0

    // Создаем дату на основе первого дня недели
    const currentDayDate = new Date(
      date.getFullYear(),
      date.getMonth() + monthOffset,
      firstDay
    )

    const weekNumber = currentDayDate.getWeek()
    console.log("weekNumber", currentDayDate, weekNumber)

    // Добавляем все дни недели в соответствующий массив
    weeks[weekNumber] = { daysOfWeek, year: currentDayDate.getFullYear() }
  }

  console.log("weeksArr", weeksArr)
  console.log("weeks", weeks)
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
