/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "320px", // Минимальная ширина для мобильных устройств
      tablet: "768px", // Минимальная ширина для планшетов
      laptop: "1024px", // Минимальная ширина для ноутбуков
      desktop: "1280px", // Минимальная ширина для стандартных настольных ПК
      desktopXL: "1536px", // Минимальная ширина для больших мониторов и высоких разрешений
    },
  },
  plugins: [],
}
