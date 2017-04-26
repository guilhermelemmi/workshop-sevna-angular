angular.module('workshopSevnaAngular')
  .factory('chuckNorrisAPIservice', function($http) {

    var chuckNorrisAPI = {};

    chuckNorrisAPI.getCategories = function() {
      return $http({
        method: 'GET', 
        url: 'https://api.chucknorris.io/jokes/categories'
      });
    }

    chuckNorrisAPI.getFact = function(category) {
      let factUrl = 'https://api.chucknorris.io/jokes/random';
      if (category) {
        factUrl += '?category=' + category;
      }
      return $http({
        method: 'GET', 
        url: factUrl
      });
    }

    return chuckNorrisAPI;
  });