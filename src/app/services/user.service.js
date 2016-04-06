(function () {
    'use strict';

    var user = angular.module('app.services.user', [
        'restangular'
    ]);

    user.constant('PAGE_SIZE', 36);

    user.constant('ENDPOINT', 'users');

    user.factory('UserFactory', function (Restangular, PAGE_SIZE, ENDPOINT) {

        var getAll = function () {
            return Restangular.one(ENDPOINT).get();
        };

        var getProduct = function (id) {
            return Restangular.one(ENDPOINT, id).get();
        };

        var getPage = function (filters, page) {
            var params = filters || {};
            params.limit = PAGE_SIZE;
            params.offset = PAGE_SIZE * (page - 1);

            return Restangular.one(ENDPOINT).get(filters);
        };

        return {
            getAll: getAll,
            getPage: getPage,
            getProduct: getProduct
        };
    });

}());
