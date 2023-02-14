const path = require('path')
const PageEntry = require('./script/pages-entry.ts')
const config = require('./package.json')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production' ? true : false
module.exports = {
  lintOnSave: true,
  pages: PageEntry.pages,
  outputDir: './dist',
  assetsDir: 'assets',
  publicPath: isProd ? '/' + config.name + '/' : undefined,
  productionSourceMap: false,
  // 需要在项目中进行编译的依赖
  transpileDependencies: [],
  // 配置开发服务
  devServer: {
    port: 8088,
    open: true,
    openPage: 'home.html',
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://api-dev.imetapro.net',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }

  },

  configureWebpack: (config) => {
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: `chunk-vendors`,
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: `chunk-common`,
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          },
        }
      }
    }

    if (process.env.VUE_NODE_ENV === 'prod') {
      config.optimization.minimizer = [
				new UglifyJsPlugin({
					uglifyOptions: {
						compress: {
							drop_console: true, //console
							drop_debugger: true,
							pure_funcs: ['console.log'] //移除console
						}
					}
				})
			]
    }

    // 线上 和 测试环境
    if (isProd) {
      config.externals = {
        // vue: 'Vue',
        // axios: 'axios',
        vconsole: 'vconsole'
      }
    }
  },

  chainWebpack: config => {
    const cdn = {
      css: [""],
      js: []
    };
    // 防止多页面打包卡顿
    config => config.plugins.delete("named-chunks");


    // 多页面cdn添加
    Object.keys(PageEntry.pages).forEach(page => {
      config.plugin(`html-${page}`).tap(args => {
        // html中添加cdn
        args[0].cdn = cdn;

        // 修复 Lazy loading routes Error
        args[0].chunksSortMode = "none";
        return args;
      });
    });
  }

}


