(function() {

  'use strict';

  var module = angular.module('app.webhook',['ui.router']);

  module.run(function($log) {

    $log.debug("Module 'app.webhook' loaded.");

  });


  // States
  module.config(function($stateProvider) {

    //$stateProvider
    //  .state('webhook', {
    //    parent: 'root',
    //    url: '/foo',
    //    views: {
    //      'content': {
    //        template: '<h1>Webhook</h1>'
    //      }
    //    }
    //  });
  });

  // Controller(s)
  module.controller('WebhookCtrl', WebhookCtrl);

  // Code
  function WebhookCtrl($log) {
    $log.debug("WebhookCtrl: loaded");
    var self = this;
    self.world = 'World';
  }

})();
