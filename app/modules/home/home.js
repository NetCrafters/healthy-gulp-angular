var home = angular.module('app.home',[]);

home.run(function($log) {
  $log.debug("Module 'app.home' loaded.");
});

// Angular Material
home.config(function() {
});

// States
home.config(function($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'modules/home/home.html'
  });
});

// Controller(s)
home.controller('HomeController', HomeController);

// Code
function HomeController($log) {
  var self = this;
  self.world = 'World';
}
