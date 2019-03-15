import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div
      css={css`
        display: grid;
      `}
    >
      <h1>Blog</h1>
    </div>
  </Layout>
)

export default IndexPage
