[![Build Status](https://travis-ci.org/nicosmaris/js.svg?branch=master)](https://travis-ci.org/nicosmaris/js)
[![Coverage](https://img.shields.io/codecov/c/github/nicosmaris/js/master.svg)](https://codecov.io/gh/nicosmaris/js)

# Minimal jquery repository

This is a repository to start frontend development with jquery. The goal is to fork it and adapt the 'scripts' section of package.json to your needs so the .travis.yml file uses bash commands without any build tool like grunt, gulp, broccoli and without any of their plugins.

Currently we copy js code from the files used in the browser to the tests to avoid messing with commonJS and AMD or ES6.

Note that github pages take a few minutes to get the pushed changes.

# Description of branches

Responsibility     | Branch    | Comments
---                | ---       | ---
live               | gh-pages  | github serves this single page app [here](https://nicosmaris.github.io/js)
test               | master    | travis uses ava to run tests on jsdom in parallel. Ajax calls are mocked with sinon


# Description of files

Responsibility     | Paths to files/folders    | Comments
---                | ---                       | ---
provisioner        | .travis.yml package.json  | npm run test && deploy.sh
static server      | bs-config.json            | lite-server used only to test manually
app                | index.html app/           | single page app without backend deployment
tests              | test/                     | 
update github page | deploy.sh                 | travis uses github token to push to gh-pages branch


# How to fork this repository

Generate a token T at github, install travis ruby gem and run the following to have your secret variable at .travis.yml

```
travis encrypt -r $username/$repository GH_TOKEN=$T --add
```

# Issues and pull requests

Submitting issues and pull requests is more than welcome.
