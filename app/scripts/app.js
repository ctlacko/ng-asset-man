'use strict';

angular.module('rtAssetManagerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'firebase',
  'ngRoute'
])
  .config(function ($routeProvider /*, $locationProvider*/) {
    // this locationProvider configuration removes the default
    // hash prefix for URLs, but angular will still fallback to using
    // the hash prefix on legacy browsers. i.e. /#/sandbox
    // Reference: http://docs.angularjs.org/guide/dev_guide.services.$location
    //$locationProvider
    //  .html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sandbox', {
        templateUrl: 'views/sandbox.html',
        controller: 'SandboxCtrl'
      })
      .when('/edit/:idx', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
