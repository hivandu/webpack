const webpack = require('webpack');

module.exports = {
  // JavaScript主文件（作为依赖关系解析的入口 ）
  entry: `./main.js`,
  // 最终输出文件的相关设置
  output: {
    // 保存输出文件的目录（__dirname变量的值是当前所在目录）
    path: `${__dirname}/build`,
    // 输出文件的文件名
    filename: 'bundle.js'
  },

  // 使得source-map功能生效
  devtool: 'source-map',

  plugins: [
    // 进行JS文件的压缩
    new webpack.optimize.UglifyJsPlugin({
      // 为了方便调试，开启source-map功能
      sourceMap: true
    })
  ]
};