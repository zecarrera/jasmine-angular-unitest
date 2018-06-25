var assert = require('assert');

describe('When user loads the tickets page', function () {
    it('should have the right title', function () {
        browser.url('http://localhost:5000');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});