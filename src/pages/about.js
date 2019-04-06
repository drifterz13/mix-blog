import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const divStyles = css`
  margin-bottom: ${rhythm(2)};
  h1 {
    margin-top: 0;
  }
  p > b {
    color: #f92300;
  }
`

export default () => (
  <Layout>
    <div
      css={css`
        max-width: 780px;
        margin: ${rhythm(2)} auto 0 auto;
        @media (max-width: 480px) {
          margin: 0 auto;
        }
      `}
    >
      <div>
        <div css={divStyles}>
          <h1>OUR MISSION</h1>
          <p>
            <b>DEV NOTHING</b>{" "}
            เป็นส่วนหนึ่งของนักพัฒนาเว็บไซต์ไทยที่รักในการแบ่งปันความรู้
            ประสบการณ์ และความชอบที่มีต่อ Javascript
          </p>
        </div>
        <div css={divStyles}>
          <h1>OUR VIBE</h1>
          <p>
            <b>DEV NOTHING</b> รักในการพัฒนาเว็บไซต์โดยใช้ React.js และ Node.js
          </p>
        </div>
        <div css={divStyles}>
          <h1>OUR PROMISE</h1>
          <p>
            <b>DEV NOTHING</b> จะเป็นส่วนหนึ่งในการช่วยให้คุณได้ความรู้
            และไอเดียใหม่ๆไปใช้ในการพัฒนาเว็บไซต์ของคุณ
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
