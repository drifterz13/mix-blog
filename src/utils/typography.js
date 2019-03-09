import Typography from "typography"

import sutroTheme from "typography-theme-sutro"

sutroTheme.headerFontFamily = ["Open Sans", "sans-serif"]
sutroTheme.bodyFontFamily = ["Merriweather", "sans-serif"]
sutroTheme.baseFontSize = "14px"
sutroTheme.googleFonts = [
  {
    name: "Open Sans",
    styles: ["400", "700"],
  },
  {
    name: "Merriweather",
    styles: ["400", "700"],
  },
]

const typography = new Typography(sutroTheme)

export const { rhythm, scale } = typography

export default typography