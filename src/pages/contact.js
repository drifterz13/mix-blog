import React from "react"
import { FaFacebook } from "react-icons/fa"
import { IoMdCall, IoMdMail } from "react-icons/io"

import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div
        className="max-w-screen-md my-0 mx-auto md:my-4 lg:my-4"
      >
        <h1 className="mt-0">CONTACT</h1>
        <ul className="ml-0 list-none">
          <li className="flex justify-start items-center">
            <IoMdCall size={22} />
            <span className="ml-2">Tel: 094-545-1858</span>
          </li>
          <li className="flex justify-start items-center">
            <IoMdMail size={22} />
            <span className="ml-2">codenothing.dev@gmail.com</span>
          </li>
          <li className="flex justify-start items-center">
            <FaFacebook size={22} />
            <span className="ml-2">facebook.com/codenothing13</span>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
