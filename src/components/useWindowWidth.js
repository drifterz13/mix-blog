import { useState, useEffect } from "react"

export function useWindowWidth() {
  if (typeof window !== undefined) {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    })
    return width
  }
  return false
}
