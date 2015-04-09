(function() {

  'use strict';

  var module = 'app.layout';

  // Bring in your required templates here
  angular.module(module, ['app.layout.default']);

  // Run
  angular.module(module).run(appRun);


  
  ////////////////////
  //
  // Code

  appRun.$inject = [ '$log' ];
  function appRun($log) {
    $log.debug("Module '" + module + "' loaded.");
  }


})();
