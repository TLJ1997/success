const px2rem = require('postcss-px2rem');
const postcss = px2rem({
  remUnit: 35   // 基准大小 baseSize，需要和rem.js中相同
})

// 通过module.exports 暴露对象
module.exports = {
  devServer: {
    open: true,
    port: 8888
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  lintOnSave: false
}
