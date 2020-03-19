import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"

const SocialShare = ({ location }) => {
  const siteUrl =
    process.env.NODE_ENV === "development"
      ? `${location.href}`.replace("localhost:8000", "codenothing.co")
      : location.href
  return (
    <React.Fragment>
      <FacebookShareButton
        className="hover:opacity-75 focus:outline-none cursor-pointer"
        additionalProps={{ "aria-label": "facebook-share-button" }}
        url={siteUrl}
      >
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <TwitterShareButton
        className="hover:opacity-75 focus:outline-none cursor-pointer"
        additionalProps={{ "aria-label": "twitter-share-button" }}
        url={siteUrl}
      >
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <LinkedinShareButton
        className="hover:opacity-75 focus:outline-none cursor-pointer"
        additionalProps={{ "aria-label": "linkedin-share-button" }}
        url={siteUrl}
      >
        <LinkedinIcon size={40} />
      </LinkedinShareButton>
    </React.Fragment>
  )
}

export const SocialShareDesktop = ({ location }) => (
  <div className="fixed left-0 z-10 hidden md:block lg:block">
    <SocialShare location={location} />
  </div>
)

export const SocialShareMobile = ({ location }) => (
  <div className="flex justify-center my-4 md:hidden lg:hidden">
    <SocialShare location={location} />
  </div>
)
