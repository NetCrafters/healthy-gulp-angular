(function() {

  'use strict';
  var module='app.webhook';

  angular.module(module,['ui.router']);

  angular.module(module).run(function($log) {

    $log.debug("Module " + module + " loaded.");

  });

  // Constants
  angular.module(module).constant('webhookConfig', {
    "API_URL" : "http://localhost:8000"
  });

  // States
  angular.module(module).config(function($stateProvider) {

    $stateProvider
      .state('webhook', {
        parent: 'root', 
        url: '/{slug:.*}',
        views: {
          'content': {
            controller: 'WebhookCtrl as content',

            // This should probably use a templateUrl
            template: '<pre>{{ content.pageData | json }}</pre>'
          },
          'header': {
            template: '{{header.widgetData | json}}',
            controller: function(widgetData) {
              var self=this;
              self.widgetData = widgetData;
            },
            controllerAs: 'header'
          }
        }, 
        resolve: {
          pageData: function(WebhookService, $stateParams, $log) {
            $log.debug("Resolving page data: " + $stateParams.slug);
            return WebhookService.getContent('pages',$stateParams.slug);
          },
          widgetData: function(WebhookService, $stateParams, $log) {
            $log.debug("Resolving page data: " + $stateParams.slug);
            return WebhookService.getContent('widgets');
          }
        }
      });
  });

  // Controller(s)
  angular.module(module).controller('WebhookCtrl', WebhookCtrl);

  // Services
  angular.module(module).factory('WebhookService', WebhookService);



  ////////////////////


  // Code
  WebhookCtrl.$inject = ['WebhookService', '$stateParams', 'pageData', 'widgetData', '$log'];
  function WebhookCtrl(WebhookService, $stateParams, pageData, widgetData, $log) {
    $log.debug('WebhookCtrl: Loaded.');

    var self = this;
    self.pageData = pageData;
    self.widgetData = widgetData;
  }

  WebhookService.$inject = ['webhookConfig', '$http', '$q', '$log'];
  function WebhookService(webhookConfig, $http, $q, $log) {

    var self = this;

    $log.debug('WebhookService: Loaded.');

    var getContent=function(type,slug) {
      $log.debug("WebhookService: In getContent(" + type + "/" + slug + ")");
      var deferred = $q.defer();
      if(!type) deferred.reject();
      $http.get(webhookConfig.API_URL + '/content-type/' + type + ( slug ? '?slug=' + slug : '') ).then(
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
      getContent: getContent
    };

  }

})();
