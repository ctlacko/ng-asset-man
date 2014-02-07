/*global Firebase:false */
'use strict';

angular.module('rtAssetManagerApp')
  .controller('EditCtrl', function ($scope, $firebase, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase('https://rtassetman.firebaseio.com/Assets/' + $routeParams.idx);

    $scope.asset = $firebase(ref);

    $scope.save = function ( ){
      ref.set({
        'name': $scope.asset.name,
        'quantity': $scope.asset.quantity,
        'description': $scope.asset.description
      });

      $location.path('/');
    };
  });
