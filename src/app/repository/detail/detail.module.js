/**
 * @ngdoc function
 * @name app.controller:DetailRepCtrl
 * @description
 * # DetailCtrl
 * Detail of a repository
 */
(function () {
  'use strict';

  var detailRep = angular.module('app.repository.detail', [
    'ui.router',
    'app.services.repository'
  ]);

  detailRep.config(function ($stateProvider) {
    $stateProvider
      .state('app.repository.detail', {
        url: '/:id',
        templateUrl: 'app/repository/detail/detail.module.html',
        controller: 'DetailRepCtrl',
        controllerAs: 'detailRepCtrl',
        resolve: {
          repository: ['RepositoryFactory', '$stateParams', function (RepositoryFactory, $stateParams) {
            return RepositoryFactory.getRepository($stateParams.id);
          }]
        }
      });
  });

  detailRep.controller('DetailRepCtrl', ['repository', function (repository) {

    if(repository) {
      this.repository = repository.plain();
    }

  }]);

}());
