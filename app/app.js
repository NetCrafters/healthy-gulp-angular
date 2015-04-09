(function() {

  'use strict';

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
  }

  // Angular Setup
  var module = 'app';

  angular.module(module, [
    'app.defaults', // app.default contains the main default for the site.
                    // Override as necessary in your project.

                    // <-- Other project requirements here

    'app.webhook'   // app.webhook should always be last since it
                    // uses a catch-all route (only if using webhook)
  ]);
  angular.module('app').config(appConfig);
  angular.module('app').controller('AppController',AppController);


  // Code

  appConfig.$inject = [ '$locationProvider', '$urlRouterProvider' ];
  function appConfig($locationProvider, $urlRouterProvider) {
    // Requires server redirection!
    //$locationProvider
    //  .html5Mode(true)
    //  .hashPrefix('!');

    $locationProvider
      .hashPrefix('!');

    //$urlRouterProvider.otherwise('/not-found');
  }

  AppController.$inject = [ '$log' ];
  function AppController($log) {
    $log.debug("AppController Loaded");
    var self = this;
  }

})();