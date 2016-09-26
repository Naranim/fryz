'use strict';

/**
 * @ngdoc function
 * @name fryzApp.controller:MainCtrl
 * @description
 * # PageCtrl
 * Controller of the fryzApp
 */
angular.module('fryzApp')
  .controller('PageCtrl', function ($scope, $routeParams) {
    $scope.params = $routeParams;

    $scope.pageId = $routeParams['page_id'];

  });
