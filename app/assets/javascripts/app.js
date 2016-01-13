angular
  .module("givingYear", ['ui.router', 'templates', 'Devise', 'ngResource'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    RouterFunction
  ]);

    function RouterFunction($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '',
          templateUrl: 'home/_home.html',
          controller: 'HomeCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'dashboard/_dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('search', {
          url: '/search',
          templateUrl: 'search/_search.html',
          controller: 'CharityIndexCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('home');
            })
          }]
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'auth/_signup.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('home');
            })
          }]
        });
    }
