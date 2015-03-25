angular.module('healthyGulpAngularApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'components/home.html'
      });

    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

  });