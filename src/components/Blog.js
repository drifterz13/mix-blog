import React from "react"
import { Link } from "gatsby"

export default ({ title, excerpt, slug }) => (
  <div>
    <h1>{title}</h1>
    <p>{excerpt}</p>
    <Link to={slug}>อ่านต่อ >></Link>
  </div>
)
