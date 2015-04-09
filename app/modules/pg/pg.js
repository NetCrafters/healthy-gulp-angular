(function() {

  'use strict';

  var module = 'app.pg';

  angular.module(module, [
    'ui.router', 'cn.offCanvas'
  ]);

  angular.module(module).config(stateConfig);
  angular.module(module).run(appRun);

  angular.module(module).controller('HeaderCtrl',HeaderCtrl);
  angular.module(module).controller('FooterCtrl',FooterCtrl);
  angular.module(module).controller('SidebarCtrl',SidebarCtrl);
  angular.module(module).controller('OCCtrl',OCCtrl);

  angular.module(module).factory('OCFactory',OCFactory);
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
  HeaderCtrl.$inject = [ 'widgetData','menuData', 'OCFactory', '$log'];
  function HeaderCtrl(widgetData, menuData, OCFactory, $log) {
    $log.debug("HeaderCtrl Loaded.");
    var self=this;
    self.widgetData = widgetData;
    self.menuData = menuData;
    self.ocToggle = function() {
      OCFactory.toggle();
    }
  }

  FooterCtrl.$inject = [ 'widgetData', '$log'];
  function FooterCtrl(widgetData, $log) {
    $log.debug("FooterCtrl Loaded.");
    var self=this;
    self.widgetData = widgetData;
  }

  SidebarCtrl.$inject = [ 'menuData', 'OCFactory', '$log'];
  function SidebarCtrl(menuData, OCFactory, $log) {
    $log.debug("SidebarCtrl Loaded.");
    var self=this;
    self.menuData = menuData;
  }

  // Services
  OCFactory.$inject = [ 'cnOffCanvas', '$log'];
  function OCFactory(cnOffCanvas, $log) {
    $log.debug("OCFactory loaded");
    return cnOffCanvas({
      templateUrl: 'modules/pg/templates/off-canvas.html',
      controller: 'OCCtrl as oc'
    });
  }
  OCCtrl.$inject = [ 'OCFactory', '$log'];
  function OCCtrl(OCFactory, $log) {
    var self=this;
    self.ocToggle = function() {
      OCFactory.toggle();
    }
  }

})();
