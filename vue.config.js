let proxyObj = {}
const CompressionPlugin = require('compression-webpack-plugin')
proxyObj['/ws'] = {
  ws: true,
  target: 'ws://www.yuzheng14.com:8081',
}
proxyObj['/'] = {
  ws: false,
  target: 'http://www.yuzheng14.com:8081',
  changeOrigin: true,
  pathRewrite: {
    '^/': '',
  },
}
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj,
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/,
            threshold: 1024,
            deleteOriginalAssets: false,
          }),
        ],
      }
    }
  },
}
