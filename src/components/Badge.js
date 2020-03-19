import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function getBackgroundFromTag(tag) {
  switch (tag) {
    case "html":
      return `bg-ember-500`
    case "css":
      return `bg-indigo-500`
    case "react":
      return `bg-blue-300`
    case "javascript":
      return `bg-pink-500`
    case "story":
      return `bg-green-400`
    default:
      break
  }
}

export default function Badge({ tag }) {
  return (
    <Link
      className={`text-white hover:text-gray-100 px-6 rounded-lg font-semibold flex justify-center items-center mr-4 bg-green-200 ${getBackgroundFromTag(
        tag
      )}`}
      to={`/tags/${tag}`}
    >
      {`#${tag}`}
    </Link>
  )
}

Badge.propTypes = {
  tag: PropTypes.string.isRequired,
}
