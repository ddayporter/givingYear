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
        .state('charities', {
          url: '/charities/{id}',
          templateUrl: 'charities/_charity-show.html',
          controller: 'CharitiesCtrl',
          resolve: {
            charityPromise: ['charities', function(charities){
              return charities.getAll();
            }]
          }
        })
        .state('search', {
          url: '/search',
          templateUrl: 'search/_search.html',
          controller: 'SearchCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('dashboard');
            })
          }]
        })
        .state('signup', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('dashboard');
            })
          }]
        });
    }
