import React from "react"
import { Link } from "gatsby"
import { MdLibraryBooks, MdBuild } from "react-icons/md"
import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <div
        style={{ maxWidth: "780px" }}
        className="flex flex-col md:flex-row items-center lg:flex-row my-0 mx-auto md:my-4 lg:my-4"
      >
        <Link
          to="/blog/1"
          className="flex flex-col items-center justify-center shadow rounded border-4 border-solid border-transparent hover:border-blue-300 h-40 w-56 md:w-1/4 lg:w-1/4 p-6 cursor-pointer"
        >
          <MdLibraryBooks className="text-green-500" size={40} />
          <div className="mt-6 text-lg font-semibold text-gray-800">
            Articles
          </div>
        </Link>
        <div className="mt-6 md:ml-12 lg:ml-12 md:mt-0 lg:mt-0 flex flex-col items-center justify-center shadow rounded h-40 w-56 md:w-1/4 lg:w-1/4 p-6 cursor-pointer">
          <MdBuild className="text-gray-800" size={40} />
          <div className="mt-6 text-lg font-semibold text-gray-800">
            Developing ...
          </div>
        </div>
      </div>
    </Layout>
  )
}
