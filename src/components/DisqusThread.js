import React, { useEffect } from "react"

const SHORTNAME = "codenothing"
const WEBSITE_URL = "https://www.codenothing.co"
const DISQUS_SCRIPT = `https://${SHORTNAME}.disqus.com/embed.js`

function injectDisqusScript() {
  const script = document.createElement("script")
  script.async = true
  script.src = DISQUS_SCRIPT
  document.getElementsByTagName("head")[0].appendChild(script)
}

function renderDisqus(id, title, path) {
  if (window.DISQUS === undefined) {
    injectDisqusScript()
  } else {
    window.DISQUS.reset({
      reload: true,
      config: function() {
        this.page.identifier = id
        this.page.url = `${WEBSITE_URL}${path}`
        this.page.title = title
      },
    })
  }
}

export default ({ id, title, path, ...other }) => {
  useEffect(() => {
    renderDisqus(id, title, path)
  })
  if (process.env.BROWSER) {
    window.disqus_shortname = SHORTNAME
    window.disqus_identifier = id
    window.disqus_title = title
    window.disqus_url = WEBSITE_URL + path
  }
  return <div {...other} id="disqus_thread" />
}
