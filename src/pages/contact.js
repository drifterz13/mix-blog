import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default () => (
  <Layout>
    <div
      css={css`
        max-width: 780px;
        margin: ${rhythm(2)} auto 0 auto;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        CONTACT
      </h1>
    </div>
  </Layout>
)
