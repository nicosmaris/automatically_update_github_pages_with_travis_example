[![Build Status](https://travis-ci.org/nicosmaris/js.svg?branch=master)](https://travis-ci.org/nicosmaris/js)
[![Coverage](https://img.shields.io/codecov/c/github/nicosmaris/js/master.svg)](https://codecov.io/gh/nicosmaris/js)

# Minimal angular 1 repository

This is a repository to start frontend development with angular 1. Travis runs end-to-end tests with protractor, coverage with istanbul and jasmine and github serves the page [here](https://nicosmaris.github.io/js)

Nodejs is used only to run protractor as the only backend is lite-server npm package used to serve static files (HTML, CSS, JS).

# Description of files

Responsibility     | Paths to files/folders    | Comments
---                | ---                       | ---
provisioner        | .travis.yml package.json  | travis starts headless selenium standalone
static server      | bs-config.json index.html | lite-server
test runner        | protractor.config.js      | starts firefox
tests              | test/                     | end to end tests with jasmine2 and protractor
update github page | deploy.sh                 | travis uses github token to push to gh-pages branch


# How to fork this repository

Generate a token T at github, install travis ruby gem and run the following to have your secret variable at .travis.yml

```
travis encrypt GH_TOKEN=$T --add
```
