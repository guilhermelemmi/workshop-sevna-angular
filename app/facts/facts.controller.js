angular.module('workshopSevnaAngular')
  .controller('FactsController', ['chuckNorrisAPIservice', 
    function FactsController(chuckNorrisAPIservice) {
      var vm = this;
      
      vm.categoriesList = [];
      vm.factsList = [];
      vm.selectedCategory = '';
      vm.getFact = getFact;
      vm.cleanFacts = cleanFacts;
      vm.sortFacts = sortFacts;
             
      function activate() {
        chuckNorrisAPIservice.getCategories().success(function (response) {
          vm.categoriesList = response;
        });            
      }

      function getFact() {
        chuckNorrisAPIservice.getFact(vm.selectedCategory).success(function (response) {
          vm.factsList.push(response);
        });
      }

      function cleanFacts() {
        vm.factsList = [];
      }

      function sortFacts() {
        vm.factsList.sort(function(a, b) {
          if (!a.category) {
            return -1;
          } else if (!b.category) {
            return 1;
          } else {
            return vm.categoriesList.indexOf(a.category[0]) - vm.categoriesList.indexOf(b.category[0]);
          }
        });
      }
      
      activate();
    }
  ]);