(function() {

  'use strict';

  var module = angular.module('app.core',
    [
      'ui.router'
    ]
  );

  module.config(function($stateProvider) {

    $stateProvider.state('root', {
      abstract: true,
      views: { 
        '' : {
          templateUrl: 'modules/core/layout/layout.html'
        },
        'content@root': {
          template: '<h1>This is the content</h1>'
        },
        'sidebar@root': {
          templateUrl: 'modules/core/layout/sidebar.html'
        },
        'header@root': {
          templateUrl: 'modules/core/layout/header.html'
        },
        'footer@root': {
          templateUrl: 'modules/core/layout/footer.html'
        },
        'jumbotron@root' : {
          templateUrl: 'modules/core/layout/jumbotron.html'
        }
      }
    });
  });

  module.run(function($log) {

    $log.debug("Module 'app.core' loaded.");

  });


})();
