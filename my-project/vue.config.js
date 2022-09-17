const { defineConfig } = require('@vue/cli-service')
//
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/8_1ZaSna2gU2pMbgoY3K/plain": {
        target: "https://sp2.baidu.com"
      }
    }
  }
})
