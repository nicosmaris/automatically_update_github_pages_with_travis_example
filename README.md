[![Build Status](https://travis-ci.org/nicosmaris/js.svg?branch=master)](https://travis-ci.org/nicosmaris/js)
[![Coverage](https://img.shields.io/codecov/c/github/nicosmaris/js/master.svg)](https://codecov.io/gh/nicosmaris/js)

# Minimal angular 1 repository

This is a repository to start frontend development with angular 1. Travis runs end-to-end tests with protractor, coverage with istanbul and jasmine and github serves the page [here](https://nicosmaris.github.io/js)

Nodejs is used only to run protractor as there is no backend.

# How to fork this repository

Generate a token T at github, install travis ruby gem and run the following to have your secret variable at .travis.yml

```
travis encrypt GH_TOKEN=$T --add
```
