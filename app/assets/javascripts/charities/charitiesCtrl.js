angular.module('givingYear')
  .controller('CharitiesCtrl', [
    '$scope',
    'charities',
    'charity',
    function($scope, charities, charity){
      $scope.charity = charity;
      $scope.addDonation = function(){
        if($scope.body === '') { return; }
        charities.addDonation(charity.id, {
          body: $scope.body,
          author: 'user',
        }).success(function(donation) {
          $scope.charity.donations.push(donation);
        });
        $scope.body = '';
      };
    }
  ]);
