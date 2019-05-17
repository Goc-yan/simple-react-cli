let merge = require('webpack-merge')
// 压缩 JS
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 生成编译文件前删除原先整个文件
let CleanWebpackPlugin = require('clean-webpack-plugin')
// 查看打包文件明细
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let base = require('./webpack.base.conf')

module.exports = merge(base, {
    
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin()
        ],
        splitChunks: {
            // 抽离公用库
            cacheGroups: {
                // react 库
                react: {
                    name: 'react',
                    test: module => /react|redux/.test(module.context),
                    chunks: 'initial',
                    priority: 10,
                    enforce: true,
                }
            }
        }
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin({})
    ]
})