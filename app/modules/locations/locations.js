(function() {

  'use strict';

  var module = angular.module('app.locations',[]);

  module.run(function($log) {

    $log.debug("Module 'app.locations' loaded.");

  });

  module.config(function() {

  });

  // States
  module.config(function($stateProvider) {

    $stateProvider
      .state('locations', {
        abstract: true,
      });
  });

  // Controller(s)
  module.controller('LocationsCtrl', LocationsCtrl);

  // Code
  function LocationsCtrl($log) {
    var self = this;
    self.world = 'World';
  }

})();
