const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [/node_modules\//]
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.stories\.tsx?$/,
                loaders: [
                    {
                        loader: require.resolve('@storybook/addon-storysource/loader'),
                        options: { parser: 'typescript' }
                    }
                ],

                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [new CheckerPlugin()]
};
