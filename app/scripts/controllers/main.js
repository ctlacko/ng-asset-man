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
    console.log($firebase);
    var ref = new Firebase('https://m84x3ofsh2b.firebaseio-demo.com/');
    $scope.messages = $firebase(ref);
    console.log($scope.messages);
  });
