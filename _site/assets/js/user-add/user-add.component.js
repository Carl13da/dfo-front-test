'use strict';

angular.
  module('userAdd').
  component('userAdd', {
    templateUrl: 'user-add/user-add.template.html',
    controller: ['User',
      function UserAddController(User) {
        this.users = User.query();

        this.create = () => {
          User.save({ name: this.name, age: this.age, address: this.address })
        }
      }
    ]
  });
