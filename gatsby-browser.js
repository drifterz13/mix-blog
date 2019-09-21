require('gatsby-remark-vscode/styles.css');
require('gatsby-remark-vscode/styles.css');

exports.onRouteUpdate = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0)
  }
}

exports.shouldUpdateScroll = args => {
  return false
}
