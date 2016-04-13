/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
(function () {
  'use strict';

  var app = angular.module('app', [
    'ngCookies',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'restangular',
    'ngFlash',
    'app.config',
    'app.main',
    'app.about',
    'app.repository',
    'app.services.repository',
    'app.components.navbar'
  ]);

  app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RestangularProvider', 'CONFIG', '$translateProvider', 'tmhDynamicLocaleProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider, RestangularProvider, CONFIG, $translateProvider, tmhDynamicLocaleProvider) {
      $urlRouterProvider
        .when('/', '/main')
        .otherwise('/');

      $locationProvider.html5Mode(true).hashPrefix('!');

      RestangularProvider.setBaseUrl(CONFIG.API_BASE_URL);

      $stateProvider
        .state('app', {
          url: '/',
          templateUrl: 'app/app.module.html',
          controller: 'AppCtrl',
          controllerAs: 'app',
          abstract: true
        });

      $translateProvider
        .useStaticFilesLoader({
          prefix: 'resources/locale-',
          suffix: '.json'
        })
        .useLocalStorage()
        .useMissingTranslationHandlerLog()
        .registerAvailableLanguageKeys(['en', 'es'], {
          'en_AU': 'en',
          'en_CA': 'en',
          'en_NZ': 'en',
          'en_PH': 'en',
          'en_UK': 'en',
          'en_US': 'en',
          'es_ES': 'es'
        })
        .preferredLanguage(navigator.language.toLowerCase().replace(/-/g, '_')) // Sets app translation locale
        .useSanitizeValueStrategy('sanitize');

      tmhDynamicLocaleProvider.localeLocationPattern(
        'bower_components/angular-i18n/angular-locale_{{locale}}.js'
      );
    }
  ]);

  app.controller('AppCtrl', [function () {
    this.currentTime = Date.now();
  }]);

  app.run(['$rootScope', 'tmhDynamicLocale', 'Restangular', 'Flash',
    function ($rootScope, tmhDynamicLocale, Restangular, Flash) {

      // Sets angular-i18n locale
      tmhDynamicLocale.set(navigator.language.toLowerCase().replace(/_/g, '-'));

      Restangular.addRequestInterceptor(function (element) {
        $rootScope.showSpinner = true;

        return element;
      });

      Restangular.addResponseInterceptor(function (data) {
        $rootScope.showSpinner = false;

        return data;
      });

      Restangular.setErrorInterceptor(function (response) {
        $rootScope.showSpinner = false;
        Flash.create('danger', 'The Api is not working, configure the base Url');

        return response;
      });

      $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if(phase === '$apply' || phase === '$digest') {
          if(fn && (typeof (fn) === 'function')) {
            fn();
          }
        } else {
          this.$apply(fn);
        }
      };

      $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.showSpinner = false;
      });

      $rootScope.$on('$stateChangeError', function () {
        $rootScope.showSpinner = false;
        Flash.create('danger', 'Failed to change state');
      });

      $rootScope.$on('$stateChangeStart', function () {
        $rootScope.showSpinner = true;
      });
    }
  ]);

}());
