'use strict'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

// loader
// preLoaders
// postLoaders
// postcss
// cssSourceMap
// buble
// extractCSS
// template
module.exports = {
  // loaders: 'vue-loader',
  // loaders: utils.cssLoaders({
  //   sourceMap: sourceMapEnabled,
  //   extract: false // isProduction
  // }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  shadowMode: true
}

module.exports.VueLoaderPlugin = VueLoaderPlugin
