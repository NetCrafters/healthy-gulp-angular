(function() {

  'use strict';

  var module = 'app.defaults';

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
          templateUrl: '/modules/default/templates/layout.html'
        },
        'content@root': {
          template: '<h1>This is the content</h1>'
        },
        'sidebar@root': {
          templateUrl: '/modules/default/templates/sidebar.html'
        },
        'header@root': {
          templateUrl: '/modules/default/templates/header.html'
        },
        'footer@root': {
          templateUrl: '/modules/default/templates/footer.html'
        },
        'jumbotron@root' : {
          templateUrl: '/modules/default/templates/jumbotron.html'
        }
      }
    });
  }

})();
