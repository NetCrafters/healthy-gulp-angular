(function() { 

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var app = angular.module('app', ['ui.router','app.demo']);

app.config(function($locationProvider, $urlRouterProvider, $stateProvider) {

    // Requires server redirection!
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'modules/home/home.html'
      });


  });



})();