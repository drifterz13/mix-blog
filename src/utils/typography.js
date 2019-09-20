import Typography from "typography"

import sutroTheme from "typography-theme-sutro"

sutroTheme.headerFontFamily = ["Roboto", "sans-serif"]
sutroTheme.bodyFontFamily = ["Roboto Mono", "sans-serif"]
sutroTheme.baseFontSize = "18px"
sutroTheme.googleFonts = [
  {
    name: "Roboto",
    styles: ["400", "700"],
  },
  {
    name: "Roboto Mono",
    styles: ["500", "700"],
  },
]

const typography = new Typography(sutroTheme)

export const { rhythm, scale } = typography

export default typography