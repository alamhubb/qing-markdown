module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md').test(/\.md$/).use('md-loader').loader('qing-markdown-loader')
  }
}