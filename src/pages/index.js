import React, { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace(`${window.location.origin}/blog/1`)
    }
  }, [])

  return <div />
}

export default IndexPage
