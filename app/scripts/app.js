'use strict';

/**
 * @ngdoc overview
 * @name fryzApp
 * @description
 * # fryzApp
 *
 * Main module of the application.
 */
angular
  .module('fryzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/user/profile', {
        templateUrl: 'views/user/profile.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/user/bookings', {
        templateUrl: 'views/user/bookings.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/user/login', {
        templateUrl: 'views/user/login.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/user/register', {
        templateUrl: 'views/user/register.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/:page_id', {
        templateUrl: 'views/page/page.html',
        controller: 'PageCtrl',
        controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
