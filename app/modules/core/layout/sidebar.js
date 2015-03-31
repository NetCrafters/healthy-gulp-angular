(function() {

  'use strict';

  var module = angular.module('app.core.sidebar',[]);

  module.run(function($log) {

    $log.debug("Module 'app.core.sidebar' loaded.");

  });

  module.config(function() {

  });

  // Controller(s)
  module.controller('SidebarCtrl', SidebarCtrl);

  // Code
  function SidebarCtrl($log) {
    var self = this;
    self.world = 'World';
  }

})();
