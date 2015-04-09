(function() {

  'use strict';

  var module = 'app.layout.default';

  angular.module(module, [
    'ui.router'
  ]);

  angular.module(module).config(stateConfig);
  angular.module(module).run(appRun);


  ////////////////////


  // Code
  //
  appRun.$inject = [ '$log' ];
  function appRun($log) {
    $log.debug("Module '" + module + "' loaded.");
  }

  stateConfig.$inject = [ '$stateProvider' ];
  function stateConfig($stateProvider) {
    $stateProvider.state('root', {
      abstract: true,
      views: {
        '' : {
          templateUrl: '/modules/layout/default/templates/layout.html'
        },
        'content@root': {
          template: '<h1>This is the content</h1>'
        },
        'sidebar@root': {
          templateUrl: '/modules/layout/default/templates/sidebar.html'
        },
        'header@root': {
          templateUrl: '/modules/layout/default/templates/header.html'
        },
        'footer@root': {
          templateUrl: '/modules/layout/default/templates/footer.html'
        },
        'jumbotron@root' : {
          templateUrl: '/modules/layout/default/templates/jumbotron.html'
        }
      }
    });
  }

})();
