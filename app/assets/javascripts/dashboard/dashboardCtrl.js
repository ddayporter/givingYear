(function(){

  angular
    .module('givingYear')
    .controller("DashboardCtrl", [
      "$scope",
      "charities", //service defined in charities.js
      function($scope, charities){
        $scope.charities = charities.charities;
        $scope.addCharity = function(){
          if(!$scope.name || $scope.name === '') { return; }
          charities.create({
            name: $scope.name,
            address: $scope.address,
            city: $scope.city,
            st: $scope.st,
            zip: $scope.zip,
            website: $scope.website,
            notes: $scope.notes
          });
          $scope.name = '';
          $scope.address = '';
          $scope.city = '';
          $scope.st = '';
          $scope.zip = '';
          $scope.website = '';
          $scope.notes = '';
        };
      }
    ])

})();
