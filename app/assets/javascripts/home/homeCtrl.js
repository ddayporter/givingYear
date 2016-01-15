(function(){

  angular
    .module('givingYear')
    .controller("HomeCtrl", [
      "$scope",
      function($scope){
        $scope.featured_charities = [
          "The Women's Center",
          "WAMU",
          "Love 146",
          "Animal Welfare League of Arlington"
        ]
      }
    ])

})();
