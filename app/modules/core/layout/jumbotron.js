(function() {

  'use strict';

  var module = angular.module('app.core.jumbotron',[]);

  module.run(function($log) {

    $log.debug("Module 'app.core.pageHeader' loaded.");

  });

  module.config(function() {

  });

  // Controller(s)
  module.controller('JumbotronCtrl', JumbotronCtrl);

  // Code
  function JumbotronCtrl($log) {
    var self = this;
    self.world = 'World';
  }

})();
