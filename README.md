Web automation demo using webdriverio, chromedriver, mocha, POM model, and allure reports.

npm init -y

mpm init wdio

npm ls webdriverio

npm run wdio

npx wdio run .\wdio.conf.js --spec .\test\specs\test.demo.js

//reporter html

npm i -g allure-commandline --save-dev

allure generate .\allure-results --clean

allure open
