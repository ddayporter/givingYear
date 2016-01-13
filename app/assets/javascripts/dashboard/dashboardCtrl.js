angular
  .module('givingYear')
  .controller("DashboardCtrl", [
    "$scope",
    function($scope){
      $scope.test = "Hello world!";
      $scope.posts = [
        "post 1",
        "post 2",
        "post 3"
      ];
      $scope.charities = [
        {
          name: "The Women's Center",
          address: "133 Park St NE, Vienna, VA 22180",
          website: "http://www.thewomenscenter.org"
        },
        {
          name: "WAMU",
          address: "Washington, DC",
          website: "http://www.wamu.org"
        },
        {
          name: "Love 146",
          address: "New York, NY",
          website: "http://love146.org"
        },
        {
          name: "Animal Welfare League of Arlington",
          address: "Arlington, VA",
          website: "http://awla.org"
        }
      ];
      $scope.total_donations = 50;
    }
  ])
