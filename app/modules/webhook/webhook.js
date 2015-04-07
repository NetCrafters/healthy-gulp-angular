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
            controller: 'WebhookCtrl as webhook',

            // This should probably use a templateUrl
            template: '<pre>{{ webhook.pageData | json }}</pre>'
          }
        },
        resolve: {
          pageData: function(WebhookService, $stateParams, $log) {
            $log.debug("Resolving page data: " + $stateParams.slug);
            return WebhookService.getPage($stateParams.slug);
          }
        }
      });
  });

  // Controller(s)
  module.controller('WebhookCtrl', WebhookCtrl);

  // Services
  module.factory('WebhookService', WebhookService);


  ////////////////////


  // Code
  function WebhookCtrl(WebhookService, $stateParams, pageData, $log) {
    $log.debug('WebhookCtrl: Loaded.');

    var self = this;
    self.pageData = pageData;
  }

  function WebhookService(webhookConfig, $http, $q, $log) {

    var self = this;

    $log.debug('WebhookService: Loaded.');

    var getPage=function(slug) {
      $log.debug("WebhookService: In getPage(" + slug + ")");
      var deferred = $q.defer();
      if(!slug) deferred.reject();
      $http.get(webhookConfig.API_URL + '/content-type/pages?slug=' + slug).then(
        function(result) {
          deferred.resolve(result.data);
        },
        function(err) {
          $log.debug("WebhookService: Error retrieving 'slug'.");

          var tempPage = {};
          tempPage.status = err.status;
          tempPage.content = err.data;

          // We *want* the service-side HTTP error codes and messages
          // to display in the bad route, so we actually resolve with the error
          deferred.resolve(tempPage);
        }
      ).catch(function(err) {
          $log.debug("WebhookService: Caught an error: ", err);
        });

      return deferred.promise;
    };

    return {
      getPage: getPage
    };

  }

})();
