module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Dashboard: 'app/components/Dashboard.jsx',
            Login: 'app/components/Login.jsx',
            Main: 'app/components/Main.jsx',
            MainPageNav: 'app/components/MainPageNav.jsx',
            MainMenu: 'app/components/MainMenu.jsx',
            Registration: 'app/components/Registration'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
