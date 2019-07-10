/**
 * writing my own webpack dev server
 */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');

// enable hot replacement
Object.keys(config.entry).forEach(function(name) {
  config.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(
    config.entry[name], // build long http connection
  );
});

const compiler = webpack(config); // packaging....
const app = express();

app.use(webpackDevMiddleware(compiler, {}));
app.use(webpackHotMiddleware(compiler, { overlayStyles: true }));

app.listen(3000);
