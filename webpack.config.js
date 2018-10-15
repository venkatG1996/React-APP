var path = require('path');
maodule.exports ={
    entry: './script.jsx',
    output:{
        path: path.resolve(_dirname,''),
        filename: 'sample.js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loaders: 'babel_loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015' ,'react']
                }
            }
        ]
    }
}

