'use strict';

var specs = [
  'test/**/*.e2e.js'
];

var istanbulPlugin = require('protractor-istanbul-plugin');

var config = {
  framework: 'jasmine2',
  specs: specs,
  plugins: [{ inline: istanbulPlugin }]
};

module.exports.config = exports.config = config;
