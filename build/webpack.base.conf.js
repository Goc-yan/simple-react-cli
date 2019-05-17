let path = require('path')
// 打包 html 文件
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 整合打包 css 文件
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 项目根路径
let rootPath = path.resolve(__dirname, '..')

let config = {
    entry: {
        app: path.resolve(rootPath, 'src/pages/app'),
        react: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: 'javascripts/[name].[chunkhash:8].js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ],
        }, {
            test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: 'images/[name].[hash:7].[ext]'
                }
            }]
        }]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            '@components': path.resolve(rootPath, 'src', 'components'),
            '@assets': path.resolve(rootPath, 'src', 'assets'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            name: 'app',
            template: './src/pages/app/index.html', // 模板路径
            filename: './pages/index.html', // 输出html文件名称
            inject: true,
            chunks: ['react', 'app']
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash].css',
        })
    ]
}
module.exports = config