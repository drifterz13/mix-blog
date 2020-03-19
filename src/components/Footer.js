import React from "react"
import { FaFacebook, FaTwitterSquare, FaGithub } from "react-icons/fa"

const FACEBOOK_URL = "http://www.facebook.com/codenothing13"
const TWITTER_URL = "http://www.twitter.com/codenothing13"

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900 p-4 h-48 flex justify-around items-center">
      <div>
        <p className="text-center uppercase">@2019, CodeNothing</p>
        <div className="flex justify-center mt-6">
          <a
            className="mx-4"
            aria-label="go to facebook.com/codenothing13"
            href={FACEBOOK_URL}
          >
            <FaFacebook size="28" />
          </a>
          <a
            className="mx-4"
            aria-label="go to twitter/codenothing13"
            href={TWITTER_URL}
          >
            <FaTwitterSquare size="28" />
          </a>
          <a className="mx-4" href="_blank">
            <FaGithub className="mx-4" size="28" />
          </a>
        </div>
      </div>
    </footer>
  )
}
