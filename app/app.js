
(function() {

    'use strict';

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
  var app = angular.module('app', ['app.webhook']);
  app.config(function($locationProvider, $urlRouterProvider) {

    // Requires server redirection!
    //$locationProvider
    //  .html5Mode(true)
    //  .hashPrefix('!');

    $locationProvider
      .hashPrefix('!');

    //$urlRouterProvider.otherwise('/not-found');

  });

  app.controller('AppController',AppController);


})();