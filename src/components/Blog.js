import React from "react"
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata"

export default ({ title, slug, tags, timeToRead, date }) => {
  return (
    <div className="bg-white shadow-xl p-8 mb-6">
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <BlogPostMetadata tags={tags} timeToRead={timeToRead} date={date} />
      <Link className="text-red-500 hover:underline" to={slug}>
        Read more >>
      </Link>
    </div>
  )
}
