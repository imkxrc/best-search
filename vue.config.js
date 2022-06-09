/*
 * @Author: ‘Yongsheng Huang 113082408@qq.com
 * @Date: 2022-06-07 09:12:08
 * @LastEditors: ‘Yongsheng Huang 113082408@qq.com
 * @LastEditTime: 2022-06-09 07:26:31
 * @FilePath: \best-search\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);

  },
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 3000,
    https: false,
    hot: "only",
    // 跨域问题解决 代理（关键部分）
    proxy: {
      '/api': {
        target: 'https://news-at.zhihu.com/api/4', // 注意！此处为后端提供的真实接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 如果接口中是没有api的，那就直接置空，'^/api': ''
          '^/api': '',
        }
      }
    }
  }
})