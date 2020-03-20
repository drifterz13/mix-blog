import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./css/sideNav.module.css"

export default function SideNav({ isShowSideNav }) {
  return (
    <div
      className={`${styles.container} ${isShowSideNav &&
        styles.containerTransform}`}
    >
      <Link className={`text-gray-800 ${styles.item}`} to="/about">
        About
      </Link>
      <Link className={`text-gray-800 ${styles.item}`} to="/contact">
        Contact
      </Link>
    </div>
  )
}

SideNav.propTypes = {
  isShowSideNav: PropTypes.bool,
}
