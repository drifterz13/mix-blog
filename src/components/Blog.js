import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import BlogPostMetadata from "./BlogPostMetadata"

export default function Blog({ title, slug, tags, timeToRead, date }) {
  return (
    <div className="bg-white shadow-xl p-8 mb-6">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <BlogPostMetadata tags={tags} timeToRead={timeToRead} date={date} />
      <Link className="text-red-500 font-medium hover:underline" to={slug}>
        Read more >>
      </Link>
    </div>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  timeToRead: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
}