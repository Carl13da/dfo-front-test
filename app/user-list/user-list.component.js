'use strict';

angular.
  module('userList').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['User',
      function UserListController(User) {
        this.users = User.query();

        this.search = () => {
          this.users = User.query({ name: this.query });
        }

        this.selectUser = (user) => {
          user.selected = !user.selected;
        }

        this.update = (user) => {
          this.users = User.update({ id: user.id, name: user.name, age: user.age, address: user.address });
        }
      }
    ]
  });
