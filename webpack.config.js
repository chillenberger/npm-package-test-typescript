const path = require('path')

module.exports = {
    entry: './src/index.ts', 
    mode: "production",
    module: {
        rules: [
            {
                test:/\.tsx?/,
                loader: 'babel-loader',
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
                use: 'ts-loader',
                exclude: [/node_modules/, /webpack.config.js/]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "dist"),
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