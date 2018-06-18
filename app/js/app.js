var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularController', function ($rootScope, $scope) {
    $scope.title = "Discount Calculator Example";

    $scope.currentDiscount = 0;

    $scope.calculateDiscount = function(){
        if(dateIsValid()){
            var year = $scope.user.dob.getFullYear();
            if (year < 1990) {
                $scope.currentDiscount = 20;
            } else if (year >= 1990 && year <= 2000) {
                $scope.currentDiscount = 15;
            } else if (year >= 2001) {
                $scope.currentDiscount = 10;
            }
            $scope.showDiscount = true;
        }
    }

    $scope.toggleDiscountView = function(){
        $scope.showDiscount = !$scope.showDiscount;
    }
    
    dateIsValid = function(){
        return $scope.user.dob.toString() !== "Invalid Date" && $scope.user.dob <= currentDate();
    }

    currentDate = function(){
        return new Date();
    }
});