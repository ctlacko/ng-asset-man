/*tell jsHint that Firebase is defined globally*/
/*global Firebase:false */
'use strict';

angular.module('rtAssetManagerApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var ref = new Firebase('https://rtassetman.firebaseio.com/Assets');
    $scope.rawAssets = $firebase(ref);
  });
