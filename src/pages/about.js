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
      <div
        css={css`
          text-align: center;
          letter-spacing: 1.3px;
          b {
            color: #f92300;
          }
        `}
      >
        <div>
          <h1>OUR MISSION</h1>
          <p>
            <b>DEV NOTHING</b>{" "}
            เป็นส่วนหนึ่งของนักพัฒนาเว็บไซต์ไทยที่รักในการแบ่งปันความรู้
            ประสบการณ์ และความคลั่งไคล้ที่มีต่อ Javascript
          </p>
        </div>
        <div>
          <h1>OUR VIBE</h1>
          <p>
            <b>DEV NOTHING</b> รักในการพัฒนาเว็บไซต์โดยใช้ React.js และ Node.js
          </p>
        </div>
        <div>
          <h1>OUR PROMISE</h1>
          <p>
            <b>DEV NOTHING</b> สัญญาว่าจะเป็นส่วนหนึ่งในการช่วยให้คุณได้ความรู้
            และไอเดียใหม่ๆไปใช้ในการพัฒนาเว็บไซต์ของคุณ
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
