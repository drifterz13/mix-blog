import React from "react"
import Metatags from "./MetaTags"

export default (props) => {
  return (
    <Metatags {...props}>
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-6434348615393592",
    enable_page_level_ads: true
  })`}
      </script>
    </Metatags>
  )
}
