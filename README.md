Web automation demo using webdriverio, chromedriver, mocha, POM model, and allure reports.

pre-req on win
- install java 1.8
- install node node-v20.19.0-x64 with additional tools

npm install

npm ls webdriverio

npm run wdio

npx wdio run .\wdio.conf.js --spec .\test\specs\test.demo.js

//reporter html

npm i -g allure-commandline --save-dev

allure generate .\allure-results --clean

allure open
