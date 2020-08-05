const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        config.node = {
          fs: 'empty'
        };
        return config
    }
});