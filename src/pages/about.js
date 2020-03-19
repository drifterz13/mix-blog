import React from "react"

import Layout from "../components/layout"

export default function Abou() {
  return (
    <Layout>
      <div
        style={{ maxWidth: "780px" }}
        className="my-0 mx-auto md:mt-4 lg:mt-4"
      >
        <div>
          <div classNam="mb-4">
            <h1 className="mt-0">OUR MISSION</h1>
            <p className="text-red-500">
              <b>CODENOTHING</b>{" "}
              เป็นส่วนหนึ่งของนักพัฒนาเว็บไซต์ไทยที่รักในการแบ่งปันความรู้
              ประสบการณ์ และความชอบที่มีต่อ Javascript
            </p>
          </div>
          <div className="mb-4">
            <h1 className="mt-0">OUR VIBE</h1>
            <p className="text-red-500">
              <b>CODENOTHING</b> รักในการพัฒนาเว็บไซต์โดยใช้ React.js และ
              Node.js
            </p>
          </div>
          <div className="mb-4">
            <h1 className="mt-0">OUR PROMISE</h1>
            <p className="text-red-500">
              <b>CODENOTHING</b> จะเป็นส่วนหนึ่งในการช่วยให้คุณได้ความรู้
              และไอเดียใหม่ๆไปใช้ในการพัฒนาเว็บไซต์ของคุณ
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
