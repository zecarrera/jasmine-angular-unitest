// var assert = require('assert');

describe('When user enters valid data to apply for a discount', function () {

    beforeEach(function(){
        browser.url('http://localhost:5000');
        browser.setValue("#firstname", "jose");
        browser.setValue("#lastname", "carrera");
        browser.setValue("#dob", "2010-12-21");
        browser.click("#apply-button");
    });

    it('Then application result shows a 10% discount', function () {
        browser.waitForVisible("#result-discount", 3000);
        var discount = browser.getText("#result-discount");
        expect(discount).toEqual("10%");
    });
});