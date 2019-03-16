import React from "react"
import { DiscussionEmbed } from "disqus-react"

const DISQUS_SHORT_NAME = "codenothing"

const CommentBox = ({ postId, postTitle }) => {
  const disqusConfig = {
    identifier: postId,
    title: postTitle,
  }
  return <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig} />
}

export default CommentBox
