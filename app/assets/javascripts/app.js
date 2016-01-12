angular
  .module("givingYear", ['ui.router', 'templates', 'Devise'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'HomeCtrl'
        })
    }
  ])
