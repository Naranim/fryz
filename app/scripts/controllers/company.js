'use strict';

/**
 * @ngdoc function
 * @name fryzApp.controller:ComapnyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the fryzApp
 */
angular.module('fryzApp')
  .controller('CompanyCtrl', function($scope, $routeParams, Company) {
    $scope.company = Company.get({
      id: $routeParams.company_id
    });

    $scope.company.getMapsUrl = function(address) {
      var google_maps_api_key = 'AIzaSyAJPxSamdSG91LSrGl_JUraprQ6MSy9AC0';
      var query = encodeURIComponent(address);
      return "https://www.google.com/maps/embed/v1/search?" + "key=" + google_maps_api_key + "&q=" + query;
    }
    console.log($scope.company.mapsUrl);
  });
