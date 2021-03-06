var myApp = angular.module('myApp', ['ngRoute', 'myControllers'])

myApp.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: false, requireBase: false })
    $routeProvider
      .when('/list', {
        templateUrl: '../partials/list.html',
        controller: 'ListCtrl'
      })
      .when('/details/:itemId', {
        templateUrl: '../partials/list-item.html',
        controller: 'ItemCtrl'
      })
      .otherwise({
        redirectTo: '/list'
      })
  }
])
