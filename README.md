# jasmine-angular-unitest
Simple Web app with angular, to demonstrate testing with jasmine and karma for unit tests and Webdriver.io for UI testing.

Initial requirements:
- Node is installed
- NPM is installed
- Java is installed (needed by selenium server, when running UI tests)

Setting up the project:
- npm install to install dependencies
- *npm test* to run unit tests

Starting app locally:
- To start web server
$ cd app/js
$ node server.js

Starting selenium server:
 $ cd scripts
 $ ./start-selenium-server.sh
 
Running UI tests: 
 $ cd scripts
 $ ./run-ui-tests.sh
