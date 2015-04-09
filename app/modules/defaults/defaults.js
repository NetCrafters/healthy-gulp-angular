(function() {

  'use strict';

  var module = 'app.defaults';

  angular.module(module, [
    'ui.router',
    'cn.offCanvas' // https://github.com/cironunes/angular-off-canvas
  ]);

  angular.module(module).config(stateConfig);
  angular.module(module).run(appRun);
  angular.module(module).factory('OCFactory', OCFactory);



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
          templateUrl: '/modules/defaults/templates/layout.html'
        },
        'content@root': {
          template: '<h1>This is the content</h1>'
        },
        'sidebar@root': {
          templateUrl: '/modules/defaults/templates/sidebar.html'
        },
        'header@root': {
          templateUrl: '/modules/defaults/templates/header.html'
        },
        'footer@root': {
          templateUrl: '/modules/defaults/templates/footer.html'
        },
        'jumbotron@root' : {
          templateUrl: '/modules/defaults/templates/jumbotron.html'
        }
      }
    });
  }

  //OCFactory.$inject = [ 'cnOffCanvas', '$log'];
  //function OCFactory(cnOffCanvas, $log) {
  //  $log.debug("OCFactory loaded");
  //  return cnOffCanvas({
  //    templateUrl: 'modules/defaults/templates/off-canvas.html'
  //  });
  //}

})();
