import React from "react"
import { css } from "@emotion/core"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
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
      ? `${location.href}`.replace("localhost:8000", "codenothing.netlify.com")
      : location.href
  return (
    <>
      <FacebookShareButton url={`${siteUrl}`} css={iconStyle}>
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <TwitterShareButton url={`${siteUrl}`} css={iconStyle}>
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <GooglePlusShareButton url={`${siteUrl}`} css={iconStyle}>
        <GooglePlusIcon size={40} />
      </GooglePlusShareButton>
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
