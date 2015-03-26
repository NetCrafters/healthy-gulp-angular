var home = angular.module('app.home',['ngMaterial']);

home.run(function($log) {
  $log.debug("Module 'app.home' loaded.");
});

// Angular Material
home.config(function($mdThemingProvider, $mdIconProvider) {
  $mdIconProvider
      .defaultIconSet("./assets/home/svg/avatars.svg", 128)
      .icon("menu"       , "./assets/home/svg/menu.svg"        , 24)
      .icon("share"      , "./assets/home/svg/share.svg"       , 24)
      .icon("google_plus", "./assets/home/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "./assets/home/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "./assets/home/svg/twitter.svg"     , 512)
      .icon("phone"      , "./assets/home/svg/phone.svg"       , 512);

      // $mdThemingProvider.theme('default')
      //     .primaryPalette('brown')
      //     .accentPalette('red');
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
home.controller('LeftController', LeftController);
home.controller('RightController',RightController);

// Code
function HomeController($mdSidenav, $log) {
  var self = this;

  self.toggleLeft = function() {
    $mdSidenav('left').toggle()
      .then(function(){
          $log.debug("toggle left is done");
      });
  };
  self.toggleRight = function() {
    $mdSidenav('right').toggle()
      .then(function(){
        $log.debug("toggle RIGHT is done");
      });
  };

}

function LeftController($mdSidenav, $log) {
  var self=this;
  self.close = function() {
    $mdSidenav('left').close()
      .then(function(){
      $log.debug("close LEFT is done");
    });
  };
}

function RightController($mdSidenav, $log) {
  var self=this;
  self.close = function() {
    $mdSidenav('right').close()
      .then(function(){
      $log.debug("close right is done");
    });
  };
  
}