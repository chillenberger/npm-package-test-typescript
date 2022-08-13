const path = require('path')

module.exports = {
    entry: {
        index: './src/index.ts'
    },
    mode: "production",
    module: {
        rules: [
            {
                test:/\.tsx?/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    "presets": [
                        [
                        "@babel/env",
                            {
                                "targets": {
                                "edge": "17",
                                "firefox": "60",
                                "chrome": "67",
                                "safari": "11.1"
                                    },
                                "useBuiltIns": "usage",
                                "corejs": "3.6.5"
                            }
                        ], 
                        "@babel/preset-react"
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
        library: {
            name: '@smart-warehousing/tsx-sandbox-ui',
            type: 'umd'
        }
    }, 
    externals: {
        react: 'react',
        antd: 'antd'
    }
}