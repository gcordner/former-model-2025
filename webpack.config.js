const fs = require('fs');
const themeJson = require('./theme.json');

// Generate _theme-values.scss dynamically
const layout = themeJson.settings?.layout || {};
const contentWidth = layout.contentSize || '700px';
const wideWidth = layout.wideSize || '1200px';

const scssVars = `$content-width: ${contentWidth};
$wide-width: ${wideWidth};
`;

fs.writeFileSync('./css/src/base/_theme-values.scss', scssVars);


const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: ['./js/shrink-header.js', './css/src/main.scss']
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'js/build/main.min.[fullhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'css/src')]
                            }
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'js/build/*',
                'css/build/*'
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/build/theme.min.[fullhash].css'
        })
    ],
    optimization: {
        minimizer: [
            '...', // JS minimizer
            new CssMinimizerPlugin()
        ]
    }
};
