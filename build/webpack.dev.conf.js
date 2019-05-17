let path = require('path')

let merge = require('webpack-merge')

let base = require('./webpack.base.conf')

let config = merge(base, {

    mode: 'development',
    // 配置资源路径方式 (开发模式中可直接调试源代码)
    devtool: 'inline-source-map',
    devServer: {
        // 将 dist 设置成根文件夹
        contentBase: path.join(__dirname, '..', 'dist'),
        // 浏览器打开
        open: true,
        // 打开页面
        openPage: 'pages'
    }
})

module.exports = config