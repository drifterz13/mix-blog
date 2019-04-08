import React from "react"
import { css } from "@emotion/core"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"
import { rhythm } from "../utils/typography"

const iconStyle = css`
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
`

const SocialShare = ({ location }) => {
  const siteUrl =
    process.env.NODE_ENV === "development"
      ? `${location.href}`.replace("localhost:8000", "codenothing.co")
      : location.href
  return (
    <>
      <FacebookShareButton url={`${siteUrl}`} css={iconStyle}>
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <TwitterShareButton url={`${siteUrl}`} css={iconStyle}>
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <LinkedinShareButton url={`${siteUrl}`} css={iconStyle}>
        <LinkedinIcon size={40} />
      </LinkedinShareButton>
    </>
  )
}

export const SocialShareDesktop = ({ location }) => (
  <div
    css={css`
      position: fixed;
      left: 0;
      z-index: 10;
      @media (max-width: 480px) {
        display: none;
      }
    `}
  >
    <SocialShare location={location} />
  </div>
)

export const SocialShareMobile = ({ location }) => (
  <div
    css={css`
      display: none;
      @media (max-width: 480px) {
        display: flex;
        justify-content: center;
        margin: ${rhythm(1)} 0;
      }
    `}
  >
    <SocialShare location={location} />
  </div>
)
