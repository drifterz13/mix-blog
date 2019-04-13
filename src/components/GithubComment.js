import React from "react"

export default class GithubComment extends React.Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.async = true
    script.setAttribute("repo", "drifterz13/mix-blog")
    script.setAttribute("theme", "github-light")
    script.setAttribute('issue-term', 'pathname')
    script.crossOrigin = "anonymous"
    script.src = "https://utteranc.es/client.js"
    document.getElementById('comments').appendChild(script)
  }

  render() {
    return <div id="comments" />
  }
}
