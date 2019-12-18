[webpack官方地址](https://www.webpackjs.com/configuration/)

#### babel
```
package.json文件
{
  babel-loader: webpack本身就能够处理.js文件，但无法对ES2015+的语法进行转换，babel-loader的作用正是实现对使用了ES2015+语法的.js文件进行处理
  babel-core: 提供一系列api，babel-loader处理文件时，实际上调用了babel-core的api
  babel-preset-env: 告知babel-leader使用哪种转码规则进行文件处理
}
```
[babel配置-各阶段的stage的区别](https://blog.csdn.net/wang252949/article/details/79064046)
- 对.babelrc文件内容的解释

示例\
[基于webpack4.x的babel简单配置和使用](https://www.jb51.net/article/157490.htm)
