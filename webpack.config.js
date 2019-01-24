const path=require('path');
const webpack = require('webpack');

module.exports = {
    "mode": "development",
    "entry": "./js/main.js",
    "output": {
        "path": __dirname+'/build',
        "filename": "main.bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": [ 'babel-loader' ]
            }
        ]
    },
    stats: {
         colors: true
    },
    devtool: 'source-map'
}
