module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Account: 'app/components/Account.jsx',
            AddListing: 'app/components/AddListing.jsx',
            App: 'app/components/App.jsx',
            Dashboard: 'app/components/Dashboard.jsx',
            Footer: 'app/components/Footer.jsx',
            Landing: 'app/components/Landing.jsx',
            LandingNav: 'app/components/LandingNav.jsx',
            Listings: 'app/components/Listings.jsx',
            Login: 'app/components/Login.jsx',
            Main: 'app/components/Main.jsx',
            ModalComponent: 'app/components/ModalComponent.jsx',
            Registration: 'app/components/Registration.jsx',
            SearchListings: 'app/components/SearchListings.jsx'
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
