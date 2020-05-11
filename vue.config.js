const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
};

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  css: {
    requireModuleExtension: true, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, './src/assets/stylus/variables.styl')
      }
    } // css预设器配置项
  },
  configureWebpack: config => {
    config.resolve.modules.push(path.resolve(__dirname, 'src'));
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081, //端口
    https: false,
    // 以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      '/v1': {
        target: 'http://192.168.70.57:8081/v1/', //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/v1': '' //请求的时候使用这个api就可以
        }
      }
    }
    // proxy: 'https://www.easy-mock.com' // 设置代理
  }
};
