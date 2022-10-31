'use strict';

class UserStorage {
  static #users = {
    id: ['test', 'test2'],
    password: ['1234', '5678'],
    name: ['kim', 'lee'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
