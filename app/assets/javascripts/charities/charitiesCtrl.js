(function(){

  angular.module('givingYear')
    .controller('CharitiesCtrl', [
      '$scope',
      'charities',
      'charity',
      function($scope, charities, charity){
        $scope.charity = charity;
        $scope.addDonation = function(){
          if($scope.amount === '') { return; }
          charities.addDonation(charity.id, {
            amount: $scope.amount,
            date: $scope.date,
            notes: $scope.notes
          }).success(function(donation) {
            $scope.charity.donations.push(donation);
          });
          $scope.amount = '';
          $scope.date = '';
          $scope.notes = '';
        };
      }
    ]);

  })();
