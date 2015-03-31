(function() {

  'use strict';

  var module = angular.module('app.core.header',[]);

  module.run(function($log) {

    $log.debug("Module 'app.core.header' loaded.");

  });

  module.config(function() {

  });

  // Controller(s)
  module.controller('HeaderCtrl', HeaderCtrl);

  // Code
  function HeaderCtrl($log) {
    var self = this;
    self.world = 'World';
  }

})();
