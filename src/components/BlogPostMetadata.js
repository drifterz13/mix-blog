import React from "react"
import PropTypes from "prop-types"
import Badge from "./Badge"
import CalendarIcon from "./icons/CalendarIcon"
import ClockIcon from "./icons/ClockIcon"

export default function BlogPostMetadata({ date, timeToRead, tags }) {
  return (
    <div className="flex flex-wrap items-center mb-8 font-semibold text-sm md:text-base lg:text-base">
      <div className="flex items-center mr-6 mb-2">
        <CalendarIcon className="mr-1" />
        <span>{date}</span>
      </div>
      <div className="flex items-center mr-6 mb-2">
        <ClockIcon className="mr-1" />
        <span>{`${timeToRead} นาที`}</span>
      </div>
      <div className="flex mb-2">
        {tags.map(tag => (
          <Badge tag={tag} key={tag} />
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
