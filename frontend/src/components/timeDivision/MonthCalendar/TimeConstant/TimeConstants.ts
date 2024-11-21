// export enum daysOfWeek {
//   Monday = 1,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// class Month {
//   constructor(public name: string, public days: number, public year: number) {}

//   static getDays(month: number, year: number): number {
//     const daysInMonth = [
//       31,
//       isLeapYear(year) ? 29 : 28,
//       31,
//       30,
//       31,
//       30,
//       31,
//       31,
//       30,
//       31,
//       30,
//       31,
//     ]
//     return daysInMonth[month]
//   }
// }

// function isLeapYear(year: number): boolean {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
// }

// interface ShiftedDate {
//   months: { [key: number]: Month }
// }
// export function getDateShifted(date: Date): ShiftedDate {
//   const year: number = date.getFullYear()
//   const months: { [key: number]: Month } = {
//     0: new Month("January", Month.getDays(0, year), year),
//     1: new Month("February", Month.getDays(1, year), year),
//     2: new Month("March", Month.getDays(2, year), year),
//     3: new Month("April", Month.getDays(3, year), year),
//     4: new Month("May", Month.getDays(4, year), year),
//     5: new Month("June", Month.getDays(5, year), year),
//     6: new Month("July", Month.getDays(6, year), year),
//     7: new Month("August", Month.getDays(7, year), year),
//     8: new Month("September", Month.getDays(8, year), year),
//     9: new Month("October", Month.getDays(9, year), year),
//     10: new Month("November", Month.getDays(10, year), year),
//     11: new Month("December", Month.getDays(11, year), year),
//   }
//   return { months }
// }
