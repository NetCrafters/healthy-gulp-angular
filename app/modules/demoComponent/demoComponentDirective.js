angular.module('app.demo',[]);

angular.module('app.demo')

.directive('demoComponent', [function() {
  return {
    restrict: 'A',
    templateUrl: 'modules/demoComponent/demoComponent.html'
  };
}]);