'use strict';

angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
      return $resource('https://localhost:44307/Users/:id', {}, {
        query: {
          params: {"name" : "@name"},
          method: 'GET',
        },
        save: {
          body: {"name" : "@name", "age" : "@age", "address" : "@address"},
          method: 'POST'
        },
        update: {
          body: {"id": "@id", "name" : "@name", "age" : "@age", "address" : "@address"},
          method: 'PUT'
        }
      });
    }
  ]);
