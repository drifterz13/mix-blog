import React from "react"
import PropTypes from "prop-types"
import Badge from "./Badge"
import CalendarIcon from "./icons/CalendarIcon"
import ClockIcon from "./icons/ClockIcon"

export default function BlogPostMetadata({ date, timeToRead, tags }) {
  return (
    <div className="flex items-center mb-8">
      <div className="flex items-center mr-6">
        <CalendarIcon className="mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center mr-6">
        <ClockIcon className="mr-2" />
        <span>{`${timeToRead} นาที`}</span>
      </div>
      <div className="flex">
        {tags.map((tag, idx) => (
          <Badge tag={tag} key={idx.toString()} />
        ))}
      </div>
    </div>
  )
}

BlogPostMetadata.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}
