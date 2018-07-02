# jasmine-angular-unitest
Simple Web app with angular, to demonstrate testing with jasmine and karma for unit tests and Webdriver.io for UI testing.

Initial dependency:
- Node is installed
- NPM is installed
- Java is installed (needed by selenium server, when running UI tests)

Setting up the project:
- npm install to set up project

- *npm test* to run unit tests

Starting app locally:
- To start web server
node server.js

Running UI tests:
- Starting selenium server to run UI tests
 1. $cd scripts
 2. ./start-selenium-server.sh
 
- Run UI tests 
 1. $cd scripts
 2. ./run-ui-tests.sh
 
