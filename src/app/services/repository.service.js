(function () {
    'use strict';

    var user = angular.module('app.services.repository', [
        'restangular'
    ]);

    user.constant('PAGE_SIZE', 36);

    user.constant('ENDPOINT', 'repositories');

    user.factory('RepositoryFactory', function (Restangular, PAGE_SIZE, ENDPOINT) {

        var getAll = function () {
            return Restangular.one(ENDPOINT).get();
        };

        var getRepository = function (id) {
            return Restangular.one(ENDPOINT, id).get();
        };

        return {
            getAll: getAll,
            getRepository: getRepository
        };
    });

}());
