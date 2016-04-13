/**
 * @ngdoc function
 * @name app.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the app
 */
(function () {
    'use strict';

    var about = angular.module('app.about', [
        'ui.router'
    ]);

    about.config(function ($stateProvider) {
        $stateProvider
            .state('app.about', {
                url: 'about',
                templateUrl: 'app/about/about.module.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            });
    });

    about.controller('AboutCtrl', [function () {
      
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);

}());
