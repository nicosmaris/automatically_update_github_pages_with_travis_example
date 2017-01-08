'use strict';

var specs = [
  'test/**/*.e2e.js'
];

var istanbulPlugin = require('protractor-istanbul-plugin');

var config = {
  framework: 'jasmine2',
  specs: specs,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  plugins: [{ inline: istanbulPlugin }]
};

module.exports.config = exports.config = config;
