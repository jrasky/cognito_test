const path = require('path');

module.exports = {
    target: 'node',
    mode: 'production',
    output: {
        filename: 'index.js',
        library: {
            type: 'commonjs'
        }
    },
    externals: {
        'aws-sdk': 'commonjs aws-sdk',
    },
};
