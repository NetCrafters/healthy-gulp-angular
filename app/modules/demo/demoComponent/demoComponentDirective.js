angular.module('app.demo')
.directive('demoComponent', [function() {
  return {
    restrict: 'A',
    templateUrl: 'modules/demo/demoComponent/demoComponent.html'
  };
}]);