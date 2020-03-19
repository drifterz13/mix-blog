import React from "react"
import PropTypes from "prop-types"

export default function DarkBackground({ isShowSideNav, onClickOutside }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 dark-background z-50 ${
        isShowSideNav ? "h-full w-full" : "h-0 w-0"
      }`}
      onClick={() => onClickOutside(!isShowSideNav)}
    />
  )
}

DarkBackground.propTypes = {
  isShowSideNav: PropTypes.bool.isRequired,
  onClickOutside: PropTypes.func.isRequired,
}
