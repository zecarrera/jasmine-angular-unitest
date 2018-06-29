describe('When user enters valid data to apply for a discount', function () {

    beforeEach(function(){
        navigateToHomePage();
        enterUserDetails("john", "test", "2010-12-21");
        submitApplication();
    });

    it('Then application result shows a 10% discount', function () {
        browser.waitForVisible("#result-discount", 3000);
        var discount = browser.getText("#result-discount");
        expect(discount).toEqual("10%");
    });
});

navigateToHomePage = function(){
    browser.url('http://localhost:5000');
};

enterUserDetails = function (firstname, lastname, dateOfBith) {
    browser.setValue("#firstname", firstname);
    browser.setValue("#lastname", lastname);
    browser.setValue("#dob", dateOfBith);
};

submitApplication = function (){
    browser.click("#apply-button");
};
