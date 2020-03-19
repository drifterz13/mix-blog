import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './css/SideNav.css'

export default function SideNav({ isShowSideNav }) {
  return (
    <div className={`side-nav__container ${isShowSideNav && "--transform"}`}>
      <Link className="text-gray-900 side-nav__item" to="/about">
        About
      </Link>
      <Link className="text-gray-900 side-nav__item" to="/contact">
        Contact
      </Link>
    </div>
  )
}

SideNav.propTypes = {
  isShowSideNav: PropTypes.bool,
}
