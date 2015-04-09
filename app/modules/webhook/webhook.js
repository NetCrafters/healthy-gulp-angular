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
  angular.module(module).config(WebhookConfig);

  // Controller(s)
  angular.module(module).controller('WebhookCtrl', WebhookCtrl);

  // Services
  angular.module(module).factory('WebhookService', WebhookService);



  ////////////////////

  // Code

  WebhookConfig.$inject = [ '$stateProvider' ];

  // The templates here are just placeholders. They should really point to your
  // actual layouts.
  function WebhookConfig($stateProvider) {
    $stateProvider
      .state('webhook', {
        parent: 'root',
        url: '/{slug:.*}',
        views: {
          'content': {
            controller: 'WebhookCtrl as content',
            controllerAs: 'content',
            template: '<pre>{{ content.pageData | json }}</pre>'
          },
          'jumbotron': {
            controller: 'WebhookCtrl as content',
            template: '<h1>Header: {{ content.pageData.featured_image}}</h1>'
          },
          'header': {
            template: '{{header.widgetData.header | json}}',
            controller: function(widgetData) {
              var self=this;
              self.widgetData = widgetData;
            },
            controllerAs: 'header'
          },
          'footer': {
            template: '{{footer.widgetData.footer | json}}',
            controller: function(widgetData) {
              var self=this;
              self.widgetData = widgetData;
            },
            controllerAs: 'footer'
          },
          'sidebar': {
            template: '{{sidebar.menuData | json }}',
            controller: function(menuData) {
              var self=this;
              self.menuData = menuData;
            },
            controllerAs: 'sidebar'
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
          },
          menuData: function(WebhookService, $log) {
            $log.debug("Resolving menu data: ");
            return WebhookService.getMenu();
          }
        }
      });
  }

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

    var getContent = function(type,slug) {
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

    var getMenu = function() {
      $log.debug("WebhookService: In getMenu()");
      var deferred = $q.defer();
      $http.get(webhookConfig.API_URL + '/menu').then(
        function(result) {
          deferred.resolve(result.data);
        },
        function(err) {
          $log.debug("WebhookService: Error retrieving menu.");
          deferred.reject($err);
        }
      );

      return deferred.promise;
    };


    return {
      getContent: getContent,
      getMenu: getMenu
    };

  }

})();
