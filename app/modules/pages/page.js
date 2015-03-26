
var page = angular.module('app.pages.page',[]);

home.run(function($log) {
  $log.debug("Module 'app.pages.page' loaded.");
});

// States
page.config(function($stateProvider) {

$stateProvider
  .state('page',{
      abstract: true,
      resolve: {
        // Go get the sitemap for menu'ing for all pages
        sitemap: function($log) {
          //$log.debug("page Resolving Sitemap...");
          //return nc3SiteMap.get(_SITEMAP);
        }
      }
    })
    .state('page.view', {
      url: '/page/:slug',
      authentication: false,
      views: {
        'header@': {
          templateUrl: 'partials/header_image.tpl.html',
          controller: 'faqsHeaderCtrl'
        },
        'message@': {
          templateUrl: 'partials/system_message.tpl.html',
          controller: 'faqsMessageCtrl'
        },
        'content@': {
          templateUrl: 'faqs/views/page.tpl.html',
          controller: 'pageCtrl'
        },
        'sidebar@': {
          templateUrl: 'faqs/views/sidebar.tpl.html',
          controller: 'faqsSidebarCtrl'
        }
      },
      resolve: {
        // Override currentCategory from parent/abstract state resolve
        // We now have a slug requesting a specific category, so let's set it.
        // It returns immediately. I don't think there is a need for a promise, since the categories data should
        // already be in memory (and injected here already resolved) from the parent state.
        pageData: function ($stateParams,$log) {
          //$log.debug("page.view Resolving PageData: " + $stateParams.slug);
          //return nc3PageData.get($stateParams.slug);
        }
      }
    });
});

// Controller(s)
page.controller('PageController', PageController);

// Code
function PageController($log) {
  var self = this;
  self.world = 'World';
}



