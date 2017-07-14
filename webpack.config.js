var path = require('path')
var webpack = require('webpack')
var cssnano = require('cssnano')

module.exports = {
  entry: './src/index.js',

  output: {
    library: 'nd-rc',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        plugins: [
          'transform-runtime',
          'add-module-exports',
          'transform-decorators-legacy',
          'transform-react-remove-prop-types',
          'transform-react-constant-elements'
        ],
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loaders: [
        'style',
        'css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss'
      ]
    }, {
      test: /\.woff(\?.*)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?.*)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2'
    }, {
      test: /\.otf(\?.*)?$/,
      loader: 'file?limit=10000&mimetype=font/opentype'
    }, {
      test: /\.ttf(\?.*)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?.*)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?.*)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(gif|png|jpg)$/,
      loader: 'url?limit=8192'
    }],
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.css']
    }
  },
  postcss: [
    cssnano({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      discardComments: {
        removeAll: true
      },
      safe: true,
      sourcemap: true
    })
  ],
  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'ReactDOM',
      commonjs: 'ReactDOM',
      amd: 'ReactDOM'
    }
  }, {
    'react-dom/server': {
      root: 'ReactDOMServer',
      commonjs2: 'ReactDOMServer',
      commonjs: 'ReactDOMServer',
      amd: 'ReactDOMServer'
    }
  }],

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
