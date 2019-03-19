import Typography from "typography"

import sutroTheme from "typography-theme-sutro"

sutroTheme.headerFontFamily = ["Source Sans Pro", "sans-serif"]
sutroTheme.bodyFontFamily = ["Lato", "sans-serif"]
sutroTheme.baseFontSize = "18px"
sutroTheme.googleFonts = [
  {
    name: "Source Sans Pro",
    styles: ["400", "700"],
  },
  {
    name: "Lato",
    styles: ["400", "700"],
  },
]

const typography = new Typography(sutroTheme)

export const { rhythm, scale } = typography

export default typography