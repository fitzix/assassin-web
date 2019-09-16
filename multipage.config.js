// 多页面配置
const fs = require('fs');
const path = require('path');
const fileNames = fs.readdirSync(path.resolve(__dirname, './src/pages'));
const MutiPageConfig = {};

fileNames.forEach(pageName => {
  MutiPageConfig[pageName] = {
    // page 的入口
    entry: `src/pages/${pageName}/index.js`,
    // 模板来源
    template: `src/pages/${pageName}/index.html`,
    // 在 dist 的输出
    filename: `${pageName}.html`,
    // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    // title: '',
    // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk，如果自己有配置 splitChunks 选项，可以在此添加
    chunks: ['chunk-vendors', 'chunk-common', pageName],
  };
});

module.exports = MutiPageConfig;
