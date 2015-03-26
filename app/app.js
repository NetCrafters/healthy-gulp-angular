(function() { 

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


function AppController($log) {
  $log.debug("AppController Loaded");
  var self = this;
}

// Angular Setup
var app = angular.module('app', ['app.demo','app.home']);
app.config(function($locationProvider, $urlRouterProvider) {

    // Requires server redirection!
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    $urlRouterProvider.otherwise('/home');

  });

app.controller('AppController',AppController);



})();