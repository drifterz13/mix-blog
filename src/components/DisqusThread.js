import React from "react"

const SHORTNAME = "codenothing"
const WEBSITE_URL = "https://www.codenothing.netlify.com"
const DISQUS_SCRIPT = `https://${SHORTNAME}.disqus.com/embed.js`

function injectDisqusScript() {
    const script = document.createElement("script")
    script.async = true
    script.src = DISQUS_SCRIPT
    document.getElementsByTagName("head")[0].appendChild(script)
}

function renderDisqus() {
  if (window.DISQUS === undefined) {
    injectDisqusScript()
  } else {
    const scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute("src") === DISQUS_SCRIPT) {
        return false
      }
      injectDisqusScript()
    }
  }
}

class DisqusThread extends React.Component {
  componentDidMount() {
    renderDisqus()
  }

  render() {
    let { id, title, path, ...other } = this.props

    if (process.env.BROWSER) {
      window.disqus_shortname = SHORTNAME
      window.disqus_identifier = id
      window.disqus_title = title
      window.disqus_url = WEBSITE_URL + path
    }

    return <div {...other} id="disqus_thread" />
  }
}

export default DisqusThread
