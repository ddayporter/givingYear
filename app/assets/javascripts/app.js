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
          controller: 'DashboardCtrl',
          // resolve property of ui-router ensures charities are loaded from the backend
          resolve: {
            charityPromise: ['charities', function(charities){
              return charities.getAll();
            }]
          }
        })
        .state('charities', {
          url: '/charities/{id}',
          templateUrl: 'charities/_charity-show.html',
          controller: 'CharitiesCtrl',
          // resolve property of ui-router ensures referenced charity is loaded from backend
          resolve: {
            charity: ['$stateParams', 'charities', function($stateParams, charities) {
              return charities.get($stateParams.id);
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
        .state('register', {
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
