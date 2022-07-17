const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭ESlint代码质量检测
  lintOnSave: true,
  productionSourceMap: false,
  //配置服务器
  devServer: {
    //主机名
    host: 'localhost',
    //启动端口号
    port: 1123,
    //是否开启https
    https: false,
    //浏览器自动打开
    open: true,
    //配置跨域
    proxy: {
      //代理名称
      [process.env.VUE_APP_BASE_API]: {
        //target后面要写的是跨域的地址
        target: process.env.VUE_APP_SERVICE_URL,
        //开启跨域
        changeOrigin: true,
        //代理路径重写
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
