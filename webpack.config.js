var path = require('path');
var webpack = require('webpack');
var WebpackHtmlPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const demo = process.env.NODE_DEMO;
// console.log(env);
// console.log(demo);
const demo_config = {
  NORMAL: {
    file_path: 'normal_webpack_demo',
    out_file: 'normalWebpackDemo_dist'
  }
}
module.exports = {
  // 入口
  entry: ["./normal_webpack_demo/src/main.js"],
  // entry: `./${demo_config[demo].file_path}/src/main.js`,
  // 出口
  output: {
    // 打包后，输出的所有文件路径
    // 通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
    path: path.resolve(__dirname, 'dist', "normalWebpackDemo_dist"),
    // path: path.resolve(__dirname, 'dist', demo_config[demo].out_file),
    // 输出文件的文件路径
    filename: "assets/js/[id].js",
    // chunkFilename: "assets/js/[id].chunk.js",
    // 输出解析文件的目录，url 相对于 HTML 页面
    publicPath: '',
  },
  module: {
    rules: [
      // css-loader：处理的是css 中的@import 和url, 根据路径(相对路径)找到相应的资源，但它不处理具体的资源
      // style-loader：负责将css-loader加载到的css样式动态的添加到html-head-style标签中
      // css压缩
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/css'
            }
          },
          { loader: 'css-loader' }
        ],
        // use: ['style-loader', 'css-loader'],
      },
      // less压缩
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/css'
            }
          },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
        // use: ['less-loader', 'style-loader']
      },
      // js压缩
      { test: /\.js$/, use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        // 过滤node文件夹
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    // html打包模块,自动插入打包后的js文件
    // 如果要配置多个html，new WebpackHtmlPlugin()
    new WebpackHtmlPlugin({
      // html的入口
      template: "./normal_webpack_demo/public/index.html",
      // template: `./${demo_config[demo].file_path}/public/index.html`,
      // 打包后的文件名称
      filename: 'index.html',
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // }
    }),
  ],
  devServer: {
    port: 10086,
  }
}
