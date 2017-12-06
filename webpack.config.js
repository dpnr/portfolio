module.exports = {
    entry: "./public/app.js",
    output:{
        path : __dirname+"/public",
        filename: 'index_bundle.js'

    },
    module:{
        loaders:[
            {
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015', 'react']
                }

            }
        

        ]



    },
    watch: true

}
