var locations = angular.module('app.locations',[]);

locations.run(function($log) {
  $log.debug("Module 'app.locations' loaded.");
});

locations.config(function() {
});

// States
locations.config(function($stateProvider) {

  $stateProvider
    .state('locations', {
      abstract: true,
    })
    .state('locations.us', {
      url: '/locations/us',
      templateUrl: 'modules/locations/locations.html'
    })
  ;
});

// Controller(s)
locations.controller('HomeController', HomeController);

// Code
function LocationsController($log) {
  var self = this;
  self.world = 'World';
}
