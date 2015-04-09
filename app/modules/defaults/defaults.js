(function() {

  'use strict';

  var module = 'app.defaults';

  angular.module(module, [
    'ui.router',
    'cn.offCanvas' // https://github.com/cironunes/angular-off-canvas
  ]);

  angular.module(module).config(stateConfig);
  angular.module(module).run(appRun);
  //angular.module(module).factory('OCFactory', OCFactory);



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
          templateUrl: '/modules/pg/templates/layout.html'
        }
      }
    });
  }

  OCFactory.$inject = [ 'cnOffCanvas', '$log'];
  function OCFactory(cnOffCanvas, $log) {
    $log.debug("OCFactory loaded");
    return cnOffCanvas({
      templateUrl: 'modules/defaults/templates/off-canvas.html'
    });
  }

})();
