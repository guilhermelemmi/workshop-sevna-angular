angular.module('workshopSevnaAngular')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'facts/facts.template.html',
      controllerAs: 'vm',
      controller: 'FactsController'
    });
  }]);