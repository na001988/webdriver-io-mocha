Web automation demo using webdriverio, chromedriver, mocha, POM model, and allure reports.

pre-requisites to work locally on windows
- install java 1.8
- install node node-v20.19.0-x64 with additional tools
- clone project
- navigate to root of project

// modules
npm install
npm i -g allure-commandline --save-dev

// verify packages
npm ls webdriverio

// run all tests
npm run wdio

//run single test

npx wdio run .\wdio.conf.js --spec .\test\specs\test.demo.js

//run manually the allure reporter html

allure generate .\allure-results --clean

allure open

// CI-CD

Created a yaml file to trigger tests on any new code push to the master branch