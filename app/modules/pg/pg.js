(function() {

  'use strict';

  var module = 'app.pg';

  angular.module(module, [
    'ui.router', 'ngAside'
  ]);

  angular.module(module).config(stateConfig);
  angular.module(module).run(appRun);
  angular.module(module).controller('HeaderCtrl',HeaderCtrl);
  angular.module(module).controller('FooterCtrl',FooterCtrl);
  angular.module(module).controller('SidebarCtrl',SidebarCtrl);

  ////////////////////


  // Code
  //
  appRun.$inject = [ '$log' ];
  function appRun($log) {
    $log.debug("Module '" + module + "' loaded.");
  }

  stateConfig.$inject = [ '$stateProvider' ];
  function stateConfig($stateProvider) {

  }

  // Controllers
  //
  HeaderCtrl.$inject = [ 'widgetData', '$log'];
  function HeaderCtrl(widgetData, $log) {
    $log.debug("HeaderCtrl Loaded.");
    var self=this;
    self.widgetData = widgetData;
  }

  FooterCtrl.$inject = [ 'widgetData', '$log'];
  function FooterCtrl(widgetData, $log) {
    $log.debug("FooterCtrl Loaded.");
    var self=this;
    self.widgetData = widgetData;
  }

  SidebarCtrl.$inject = [ 'menuData', '$log'];
  function SidebarCtrl(menuData, $log) {
    $log.debug("SidebarCtrl Loaded.");
    var self=this;
    self.menuData = menuData;
  }


})();
