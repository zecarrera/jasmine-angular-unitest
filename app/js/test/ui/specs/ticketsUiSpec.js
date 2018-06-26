var assert = require('assert');

describe('When user enters valid data to apply for a discount', function () {

    beforeEach(function(){
        browser.url('http://localhost:5000');
        browser.setValue("#firstname", "jose");
        browser.setValue("#lastname", "carrera");
        // browser.click("#dob");
        // browser.click("#dob");
        browser.addValue("#dob", "11/10/1900");
        // browser.keys(["Escape", "Digit1"]);
        // browser.keys("Digit1");
        // browser.setValue("#dob", formatDate("11/10/1900"));
        // browser.element('form').click('"#dob"').keys("11/10/1900");

        // browser.keys("#dob", ["0", "2"]);
        browser.click("#apply-button");
    });

    it('Then application result shows a 15% discount', function () {
        var discount = browser.getText("#result-discount");
        // assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
        expect(discount).toEqual("15");
    });
});

function formatDate(date) {
    const lang = process.env.LANG.slice(0, 5).replace('_', '-') // ru_RU.utf8 -> ru-RU
    moment.locale(lang)
    let formattedDateForInput = moment(date).format('L')

    if (isNaN(Number(formattedDateForInput[4]))) {
        // for some reason, chrome allow user to specify years until 999 999
        // and if we have YYYY-MM-DD format, we will specify only year
        // so we need to apply `tab` after year had specified
        // btw, this fix will work until 31 December 9999
        // hope, chrome team will fix this bug until this year

        formattedDateForInput = formattedDateForInput.replace(/[^0-9]/, '\t') // if year is first part in formattedDate
    }

    formattedDateForInput = formattedDateForInput.replace(/[^0-9\t]/gi, '') + '\t'

    return formattedDateForInput
}