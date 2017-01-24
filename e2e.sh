#!/bin/bash
#
# Runs end to end tests by starting a web server with static content, starting a browser and runing protractor

./node_modules/.bin/webdriver-manager update --standalone
export DISPLAY=:99.0
sh -e /etc/init.d/xvfb start
nohup bash -c "./node_modules/.bin/webdriver-manager --standalone start 2>&1 &"
sleep 5
cat nohup.out

nohup bash -c "npm run dev 2>&1 &"
sleep 5
cat nohup.out

npm run e2e

