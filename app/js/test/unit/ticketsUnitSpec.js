describe("Given a discount application is made", function () {
    beforeEach(function () {
        module("testingAngularApp");
    });
    var testData = [
    {
        dateOfBirth: new Date("01/01/2001"),
        expectedDiscount: 10
    }, 
    {
        dateOfBirth: new Date("01/01/2018"),
        expectedDiscount: 10
    },
    {
        dateOfBirth: new Date("01/01/1990"),
        expectedDiscount: 15
    },
    {
        dateOfBirth: new Date("12/31/2000"),
        expectedDiscount: 15
    },
    {
        dateOfBirth: new Date("12/31/1989"),
        expectedDiscount: 20
    }
]
    testData.forEach(function(testInput) {
        describe("When user is born from 2001 onwards", function () {
            var scope;
            var controller;
            beforeEach(inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                controller = $controller("testingAngularController", {
                    $scope: scope
                });
                scope.user = {
                    firstname: "John",
                    lastname: "Hansen",
                    dob: testInput.dateOfBirth
                };
                scope.calculateDiscount();
            }));

            it("then discount is set to correct value", function () {
                expect(scope.currentDiscount).toBe(testInput.expectedDiscount);
            })
        });
    });

    var invalidDateInputs = [new Date(""), new Date("99/99/9999"), new Date("mm/dd/yyyy"), new Date("01/01/2025")];
    invalidDateInputs.forEach(function (dateOfBirth) {
                describe("When date is invalid", function () {
        var scope;
        var controller;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller("testingAngularController", {
                $scope: scope
            });
            scope.user = {
                firstname: "John",
                lastname: "Hansen",
                dob: dateOfBirth
            };
            scope.calculateDiscount();
        }));

        it("then discount is set to correct value", function () {
            expect(scope.currentDiscount).toBe(0);
        })
    });
 });

});