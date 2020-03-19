import React from "react"
import PropTypes from "prop-types"

export default function Hamburger({ onToggle, isShowSideNav }) {
  return (
    <div
      className="hamburger__container"
      onClick={() => onToggle(!isShowSideNav)}
    >
      <div
        className={`hamburger__bar hamburger__top-bar ${isShowSideNav &&
          "--transform"}`}
      />
      <div
        className={`hamburger__bar hamburger__middle-bar ${isShowSideNav &&
          "--transform"}`}
      />
      <div
        className={`hamburger__bar hamburger__bottom-bar ${isShowSideNav &&
          "--transform"}`}
      />
    </div>
  )
}

Hamburger.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isShowSideNav: PropTypes.bool.isRequired,
}
