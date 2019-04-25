import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { FaFacebook, FaTwitterSquare, FaGithub } from "react-icons/fa"
import { ThemeContext } from "../utils/theme"

const FACEBOOK_URL = "http://www.facebook.com/codenothing13"
const TWITTER_URL = "http://www.twitter.com/codenothing13"

const iconStyles = css`
  margin: 0 12px;
  color: white;
`

const Footer = () => {
  const { darkMode } = React.useContext(ThemeContext)
  return (
    <footer
      css={css`
        background: ${darkMode ? `#222123` : `#639ee8`};
        padding: ${rhythm(1)};
        height: 200px;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
      `}
    >
      <div>
        <p>@2019, CodeNothing</p>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <a
            aria-label="go to facebook.com/codenothing13"
            href={FACEBOOK_URL}
            css={iconStyles}
          >
            <FaFacebook size="28" />
          </a>
          <a
            aria-label="go to twitter/codenothing13"
            href={TWITTER_URL}
            css={iconStyles}
          >
            <FaTwitterSquare size="28" />
          </a>
          <FaGithub css={iconStyles} size="28" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
