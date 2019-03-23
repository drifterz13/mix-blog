import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default () => {
  return (
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={e => e.preventDefault()}
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
        width: 300px;
      `}
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <p
        css={css`
          text-align: center;
          letter-spacing: 2px;
          font-weight: bold;
        `}
      >
        FOLLOW <span>CODENOTHING</span>
      </p>
      <input
        css={css`
          border: none;
          padding: 6px 8px;
          outline: none;
        `}
        type="email"
        name="email"
        placeholder="Your email address"
      />
      <button
        css={css`
          margin-top: ${rhythm(0.5)};
          outline: none;
          border: none;
          border-radius: 2px;
          background: #f34a4a;
          color: white;
          padding: 6px 8px;
          cursor: pointer;
          text-transform: uppercase;
          font-weight: bold;
        `}
        type="submit"
      >
        Send
      </button>
    </form>
  )
}
