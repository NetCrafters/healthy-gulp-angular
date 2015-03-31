(function() {

  'use strict';

  var module = angular.module('app.webhook',['ui.router']);

  module.run(function($log) {

    $log.debug("Module 'app.webhook' loaded.");

  });

  // Constants
  module.constant('webhookConfig', {
    "API_URL" : "http://localhost:8000"
  });

  // States
  module.config(function($stateProvider) {

    $stateProvider
      .state('webhook', {
        parent: 'root',
        url: '/{slug:.*}',
        views: {
          'content': {
            template: '<h1>Webhook</h1>',
            controller: 'WebhookCtrl as webhook'
          }
        }
      });
  });

  // Controller(s)
  module.controller('WebhookCtrl', WebhookCtrl);

  // Services
  module.factory('WebhookService', WebhookService);

  // Code
  function WebhookCtrl(WebhookService, $stateParams, $log) {

    var self = this;

    $log.debug('WebhookCtrl: Loaded.');

    $log.debug('StateParams: ', $stateParams);

    WebhookService.getPage('plages/testing-slug');

  }

  function WebhookService(webhookConfig, $http, $q, $log) {

    var self = this;

    $log.debug('WebhookPageService: Loaded.');

    var getPage=function(slug) {
      var deferred = $q.defer();
      if(!slug) deferred.reject();
      $http.get(webhookConfig.API_URL + '/content-type/pages?slug=' + slug).then(
        function(data) {
          $log.debug(data);
          deferred.resolve(data);
        },
        function(err) {
          deferred.reject(err);
        }
      );

      return deferred.promise;
    }

    return {
      getPage: getPage
    }

  }

})();
