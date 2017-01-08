[![Build Status](https://travis-ci.org/nicosmaris/js.svg?branch=master)](https://travis-ci.org/nicosmaris/js)
[![Coverage](https://img.shields.io/codecov/c/github/nicosmaris/js/master.svg)](https://codecov.io/gh/nicosmaris/js)

# Minimal angular 1 repository

This is a repository to start frontend development with angular 1. The goal is to fork it and adapt it to your needs so the .travis.yml file uses bash commands without any build tool like grunt, gulp, broccoli and without any of their plugins.

# Description of branches

Responsibility     | Branch    | Comments
---                | ---       | ---
live               | gh-pages  | github serves this single page app [here](https://nicosmaris.github.io/js)
test               | master    | travis uses nodejs to serve static files and test angular with jasmine (you can click on the buttons on the top for details)


# Description of files

Responsibility     | Paths to files/folders    | Comments
---                | ---                       | ---
provisioner        | .travis.yml package.json  | travis starts headless selenium standalone with xvfb and webdriver-manager
static server      | bs-config.json            | lite-server
app                | index.html app/           | single page app without backend deployment
test runner        | protractor.config.js      | starts firefox and collects coverage with istanbul
tests              | test/                     | end to end tests with jasmine2
update github page | deploy.sh                 | travis uses github token to push to gh-pages branch


# How to fork this repository

Generate a token T at github, install travis ruby gem and run the following to have your secret variable at .travis.yml

```
travis encrypt -r $username/$repository GH_TOKEN=$T --add
```

# Issues and pull requests

Submitting issues and pull requests is more than welcome.
