// import { getDateShifted, daysOfWeek } from "../TimeConstant/TimeConstants"
// declare global {
//   interface Date {
//     getWeek(): number
//     getWeekYear(): number
//   }
// }

// function calculateMonthDetails(date: Date): any {
//   Date.prototype.getWeek = function (): number {
//     const date = new Date(this.getTime())
//     date.setHours(0, 0, 0, 0)
//     // Thursday in current week decides the year.
//     date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
//     // January 4 is always in week 1.
//     const week1 = new Date(date.getFullYear(), 0, 4)
//     // Adjust to Thursday in week 1 and count number of weeks from date to week1.
//     return (
//       1 +
//       Math.round(
//         ((date.getTime() - week1.getTime()) / 86400000 -
//           3 +
//           ((week1.getDay() + 6) % 7)) /
//           7
//       )
//     )
//   }
//   // Returns the four-digit year corresponding to the ISO week of the date.
//   Date.prototype.getWeekYear = function (): number {
//     const date = new Date(this.getTime())
//     date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))
//     return date.getFullYear()
//   }

//   const months = getDateShifted(date).months

//   const currentDate: Date = new Date()
//   const staticDate: Date = new Date(date.getFullYear(), date.getMonth(), 1)
//   const staticPreviousMonth: Date = new Date(
//     date.getFullYear(),
//     date.getMonth() - 1,
//     1
//   )
//   const prevMonthLength: number = months[staticPreviousMonth.getMonth()].days
//   console.log("prevMonthLength -----> ", prevMonthLength)
// }
            // TODO : Switch on Ts