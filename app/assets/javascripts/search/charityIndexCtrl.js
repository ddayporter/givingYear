angular
  .module("givingYear")
  .controller("CharityIndexCtrl", [
    "$scope",
    "$http",
    function($scope, $http){
      var request = {
        method: 'GET',
        url: 'https://quickstartdata.guidestar.org/v1/quickstartsearch.json?q=organization_name:womens-center',
        beforeSend: function(xhr){
          xhr.setRequestHeader("Authentication", "Basic" + hash("rachelandrewsporter@gmail.com:Dvcc626!"))
        }
      }
      $http(request).then(function(response){
        $scope.charities = response.hits;
      });
    }
  ])
