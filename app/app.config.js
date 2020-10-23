'use strict';

angular.
  module('userApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/add', {
          template: '<user-add></user-add>'
        }).
        otherwise('/users');
    }
  ]);
