const path = require('path');
const glob = require('glob');

function resolve(dir) {
  return path.join(__dirname, dir);
}

function getEntry(globPath) {
  let entries = {};
  glob.sync(globPath).forEach(function(entry) {
    let tmp = entry.split('/').splice(-3);
    entries[tmp[1]] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.html',
      filename: `${tmp[1]}.html`,
    };
  });
  return entries;
}

let pages = getEntry('./src/pages/**?/*.html');

module.exports = {
  pages,
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src/'),
      },
    },
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-element-ui', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });
  },
};
