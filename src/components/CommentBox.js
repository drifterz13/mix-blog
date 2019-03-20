import React from "react"
import { DiscussionEmbed } from "disqus-react"

const DISQUS_SHORT_NAME = "codenothing"

const CommentBox = ({ title, slug }) => {
  const disqusConfig = {
    identifier: slug,
    title,
  }
  return <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig} />
}

export default CommentBox
