/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
(function () {
    'use strict';

    var main = angular.module('app.main', [
        'ui.router'
    ]);

    main.config(function ($stateProvider) {
        $stateProvider
            .state('app.main', {
                url: 'main',
                templateUrl: 'app/main/main.module.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });
    });

    main.controller('MainCtrl', function () {
    });

}());
