const path = require('path');

module.exports = {
    target: 'node',
    mode: 'development',
    externals: {
        'aws-sdk': 'commonjs aws-sdk',
    },
};
