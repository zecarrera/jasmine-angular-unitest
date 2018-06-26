var assert = require('assert');

describe('When user enters valid data to apply for a discount', function () {

    beforeEach(function(){
        browser.url('http://localhost:5000');
        browser.setValue("#firstname", "jose");
        browser.setValue("#lastname", "carrera");

        var date = '2000-03-28';
        browser.execute(function (date) {
            document.querySelector('#dob').value = date;
        }, date);
        
        browser.click("#apply-button");
    });

    it('Then application result shows a 15% discount', function () {
        // browser.waitForVisible("#result-discount", 3000);
        // var discount = browser.getText("#result-discount");
        browser.pause(5000);
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