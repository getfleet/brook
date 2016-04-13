/**
 * @ngdoc function
 * @name app.controller:RepositoryCtrl
 * @description
 * # RepositoryCtrl
 * Repository controller of the app
 */
(function () {
  'use strict';

  var repository = angular.module('app.repository', [
    'ui.router',
    'app.services.repository',
    'app.repository.detail'
  ]);

  repository.config(function ($stateProvider) {
    $stateProvider
      .state('app.repository', {
        url: 'repository',
        templateUrl: 'app/repository/repository.module.html',
        controller: 'RepositoryCtrl',
        controllerAs: 'repositoryCtrl',
        resolve: {
          repositories: ['RepositoryFactory', function (RepositoryFactory) {
            return RepositoryFactory.getAll();
          }]
        }
      });
  });

  repository.controller('RepositoryCtrl', ['repositories', function (repositories) {

    if(repositories) {
      this.repositories = repositories.plain();
    }

  }]);

}());
