'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataProvider = {};
var request = require.context('./', true, /\/.*\/index.*\.js$/);
request.keys().forEach(function (path) {
  var module = request(path);
  path = path.replace(/(\.\/|\/index\.js)/gi, '').split('/');
  var fileName = path[0].replace(/^[a-z]/, function (match) {
    return match.toUpperCase();
  });

  dataProvider[fileName] = module;
});

exports.default = dataProvider;
module.exports = exports['default'];