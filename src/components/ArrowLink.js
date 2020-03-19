import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"

export default function ArrowLink({ left, path, children }) {
  if (left) {
    return (
      <Link to={path}>
        <div className="flex items-center text-sm md:text-base lg:text-base">
          <FaLongArrowAltLeft className="mr-2" size={32} />
          {children}
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={path}>
        <div className="flex items-center text-sm md:text-base lg:text-base">
          {children}
          <FaLongArrowAltRight className="ml-2" size={32} />
        </div>
      </Link>
    )
  }
}

ArrowLink.propTypes = {
  left: PropTypes.bool,
  path: PropTypes.string.isRequired,
  children: PropTypes.node,
}
