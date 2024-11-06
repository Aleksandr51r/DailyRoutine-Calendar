import calculateMonthDetails from "../timeDivision/MonthCalendar/Math/TimeMath"

describe("Testing calculateMonthDetails function", () => {
  it("should calculate details correctly for January 2023", () => {
    const date = new Date(2023, 0, 1) // Январь 2023 года
    const details = calculateMonthDetails(date)
    expect(details.nameOfMonth).toBe("January")
    expect(details.weeks[1].daysOfWeek).toHaveLength(7) // Проверить дни недели
  })

  it("should handle February in a leap year", () => {
    const date = new Date(2024, 1, 1) // Февраль 2024 года
    const details = calculateMonthDetails(date)
    expect(details.weeks[1].daysOfWeek).toHaveLength(7)
    expect(details.weeks[5]).toBeUndefined() // Проверить, что нет лишней недели
  })

  it("should calculate last week of December 2023 correctly", () => {
    const date = new Date(2023, 11, 31)
    const details = calculateMonthDetails(date)
    expect(details.weeks).toHaveProperty("52") // Проверить наличие 52-й недели
  })
})
