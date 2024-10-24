export const daysOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
}

const year = new Date().getFullYear()
const addYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 1 : 0;
const staticJanuaryDate = new Date(new Date().getFullYear(), 0, 1)
const staticLastDecemberDate = new Date(new Date().getFullYear(), 11, 31)
const addFirstWeek = [1, 2, 3, 4].includes(staticJanuaryDate.getDay()) ? 1 : 0
const addLastWeek = [1, 2, 3].includes(staticLastDecemberDate.getDay()) ? 0 : -1

const weekNumbers = Array.from({ length: 12 }, (_, monthIndex) => {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  return Math.ceil(daysInMonth / 7)
})

export const months = {
  0: { name: "January", days: 31} ,
  1: { name: "February", days: 28 + addYear},
  2: { name: "March", days: 31},
  3: { name: "April", days: 30},
  4: { name: "May", days: 31},
  5: { name: "June", days: 30},
  6: { name: "July", days: 31},
  7: { name: "August", days: 31,},
  8: { name: "September", days: 30},
  9: { name: "October", days: 31},
  10: { name: "November", days: 30},
  11: { name: "December", days: 31} 
}

