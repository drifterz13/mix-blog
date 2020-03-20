import React from "react"
import PropTypes from "prop-types"

import styles from "./css/hamburger.module.css"

export default function Hamburger({ onToggle, isShowSideNav }) {
  const topBarStyle = isShowSideNav ? styles.topBarAnimated : styles.topBar
  const middleBarStyle = isShowSideNav
    ? styles.middleBarAnimated
    : styles.middleBar
  const bottomBarStyle = isShowSideNav
    ? styles.bottomBarAnimated
    : styles.bottomBar

  return (
    <div className={styles.container} onClick={() => onToggle(!isShowSideNav)}>
      <div className={`${styles.bar} ${topBarStyle}`} />
      <div className={`${styles.bar} ${middleBarStyle}`} />
      <div className={`${styles.bar} ${bottomBarStyle}`} />
    </div>
  )
}

Hamburger.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isShowSideNav: PropTypes.bool.isRequired,
}
