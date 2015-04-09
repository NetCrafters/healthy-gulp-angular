(function() {

  'use strict';

  var module = 'app.core';

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
    $log.debug("Module 'app.core' loaded.");
  }

  stateConfig.$inject = [ '$stateProvider' ];
  function stateConfig($stateProvider) {
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
  }

})();
