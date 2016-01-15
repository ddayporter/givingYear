(function(){

  angular
    .module("givingYear")
    .controller("SearchCtrl", [
      "$scope",
      "$http",
      function($scope, $http){
        var request = {
          method: 'GET',
          url: '/guidestar/',
        }
        $http(request).then(function(response){
          $scope.charities = response.data.hits;
        });
      }
    ])

  })();
