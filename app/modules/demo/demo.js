angular.module('app.demo',['ui.router']);

angular.module('app.demo')

.run(function($log) {
  $log.debug("Module 'app.demo' loaded.");  
})
.config(function($stateProvider) {

  $stateProvider
    .state('demo', {
      url: '/demo',
      templateUrl: 'modules/demo/demo.html'
    });

  })

;