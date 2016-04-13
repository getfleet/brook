(function () {
    'use strict';

    var navbar = angular.module('app.components.navbar', []);

    navbar.config(function () {

    });

    navbar.controller('NavbarCtrl', ['$state', function ($state) {
        this.brand = "Brook";
    }]);

    navbar.directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.directive.html',
            controller: 'NavbarCtrl',
            controllerAs: 'navbar'
        };
    });

}());
