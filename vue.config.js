const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    client: {
      overlay: false,
    },
    // proxy: {
    //   '/': {
    //     target: 'http://apis.data.go.kr',
    //     pathRewrite: { '^/': '' },
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
