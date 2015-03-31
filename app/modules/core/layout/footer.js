(function() {

  'use strict';

  var module = angular.module('app.core.footer',[]);

  module.run(function($log) {

    $log.debug("Module 'app.core.footer' loaded.");

  });

  module.config(function() {

  });

  // Controller(s)
  module.controller('FooterCtrl', FooterCtrl);

  // Code
  function FooterCtrl($log) {
    var self = this;
    self.world = 'World';
  }

})();
