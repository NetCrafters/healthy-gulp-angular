(function() {

  'use strict';

  var module = angular.module('app.core',
    [
      'ui.router',
      'app.core.sidebar',
      'app.core.header',
      'app.core.footer',
      'app.core.jumbotron'
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
          templateUrl: 'modules/core/layout/content.html'
        },
        'sidebar@root': {
          templateUrl: 'modules/core/layout/sidebar.html',
          controller: 'SidebarCtrl as sidebar'
        },
        'header@root': {
          templateUrl: 'modules/core/layout/header.html',
          controller: 'HeaderCtrl as header'
        },
        'footer@root': {
          templateUrl: 'modules/core/layout/footer.html',
          controller: 'FooterCtrl as footer'
        },
        'jumbotron@root' : {
          templateUrl: 'modules/core/layout/jumbotron.html',
          controller: 'JumbotronCtrl as jumbotron'
        }
      }
    });

    //$stateProvider
    //  .state('webhook', {
    //    parent: 'root',
    //    url: '/foo',
    //    views: {
    //      'content': {
    //        template: '<h1>Webhook</h1>'
    //      }
    //    }
    //  });

  });

  module.run(function($log) {

    $log.debug("Module 'app.core' loaded.");

  });


})();
