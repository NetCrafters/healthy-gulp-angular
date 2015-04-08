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
  var app = angular.module('app', [
    'app.core',     // app.core contains the main layout for the site.
                    // Override as necessary in your project.

                    // <-- Other project requirements here

    'app.webhook'   // app.webhook should always be last since it
                    // uses a catch-all route
  ]);
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