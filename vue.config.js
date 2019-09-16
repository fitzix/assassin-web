const path = require('path');
const MutiPageConfig = require('./multipage.config');

module.exports = {
  pages: MutiPageConfig,
  productionSourceMap: false,
  devServer: {
    index: 'assassin.html',
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src/'),
        assassin: path.resolve(__dirname, 'src/pages/assassin'),
        templar: path.resolve(__dirname, 'src/pages/templar'),
      },
    },
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== 'development', config => {
      console.log(Object.keys(MutiPageConfig).length);
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            minChunks: Object.keys(MutiPageConfig).length,
            chunks: 'initial',
          },
        },
      });
    });
  },
};
