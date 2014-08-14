'use strict';

/**
 * @ngdoc function
 * @name uxmDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uxmDashboardApp
 */
angular.module('uxmDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
