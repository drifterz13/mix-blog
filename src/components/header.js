import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Hamburger from "./Hamburger"
import Logo from "../../static/images/transparent-logo.png"

export default function Header({ isShowSideNav, onToggle }) {
  return (
    <header className="bg-blue-900 text-white h-32">
      <div className="flex items-center justify-between w-4/5 lg:w-3/5 xl:w-3/5 h-full my-0 mx-auto">
        <Link to="/" className="no-underline">
          <div className="flex items-center self-center">
            <img className="mb-0" src={Logo} alt="Codenothing logo" />
            <div className="text-xl font-semibold flex flex-col p-2">
              CODE<span>NOTHING</span>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex lg:flex justify-end items-center w-full font-semibold text-md uppercase m-0">
          <Link
            className="hover:text-red-500 w-auto text-center p-2 mr-4"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-red-500 w-auto text-center p-2"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div>
          <Hamburger onToggle={onToggle} isShowSideNav={isShowSideNav} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isShowSideNav: PropTypes.bool.isRequired
}