#!/bin/bash
#
# Updates branch gh-pages
# Github serves that branch as a static site at https://nicosmaris.github.io/js
rev=$(git rev-parse --short HEAD)

cd _site

git init
git config user.name "Nicos Maris"
git config user.email "nicos.maris@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/nicosmaris/js.git"
git fetch upstream && git reset upstream/gh-pages

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
