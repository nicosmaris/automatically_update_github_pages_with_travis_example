'use strict';

var specs = [
  'spec/**/*.e2e.js'
];

var config = {
  framework: 'jasmine2',
  specs: specs,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'firefox' // or 'safari'
  },
  baseUrl: 'http://localhost:8000/'
};

module.exports.config = exports.config = config;
